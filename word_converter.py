import os
import sys
import time
from comtypes.client import CreateObject

def word_to_pdf(input_file, output_file):
    """
    Convert a Word document to PDF using Microsoft Word COM object
    This preserves the exact formatting of the original document
    """
    try:
        # Create Word application object
        word = CreateObject('Word.Application')
        word.Visible = False
        
        # Open the document
        doc = word.Documents.Open(input_file)
        
        # Save as PDF
        doc.SaveAs(output_file, FileFormat=17)  # 17 = PDF format
        
        # Close the document and quit Word
        doc.Close()
        word.Quit()
        
        return True
    except Exception as e:
        print(f"Error in word_to_pdf: {str(e)}")
        return False

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python word_converter.py input_file output_file")
        sys.exit(1)
    
    input_file = os.path.abspath(sys.argv[1])
    output_file = os.path.abspath(sys.argv[2])
    
    if not os.path.exists(input_file):
        print(f"Input file does not exist: {input_file}")
        sys.exit(1)
    
    success = word_to_pdf(input_file, output_file)
    if success:
        print(f"Successfully converted {input_file} to {output_file}")
    else:
        print(f"Failed to convert {input_file}")
        sys.exit(1)
