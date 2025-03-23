# PDF Converter

A modern, responsive web application built with Flask for converting various file formats to PDF and merging PDF documents.

## Features

- **Convert to PDF**: Convert images, text files, and other formats to PDF
- **Merge PDFs**: Combine multiple PDF files into a single document
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Secure Processing**: Files are automatically deleted after one hour
- **Modern UI**: Clean, intuitive interface with drag-and-drop functionality

## Technologies Used

- **Backend**: Python, Flask
- **Frontend**: HTML5, CSS3, JavaScript, Bootstrap 5
- **PDF Processing**: PyPDF2, ReportLab, Pillow
- **Form Handling**: Flask-WTF

## Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/pdf-converter.git
cd pdf-converter
```

2. Create a virtual environment and activate it:
```
python -m venv venv
venv\Scripts\activate  # On Windows
source venv/bin/activate  # On macOS/Linux
```

3. Install the dependencies:
```
pip install -r requirements.txt
```

4. Run the application:
```
python app.py
```

5. Open your browser and navigate to `http://localhost:5000`

## Supported File Formats

- **Images**: JPG, JPEG, PNG, GIF, BMP, TIFF
- **Text**: TXT, DOC, DOCX, RTF
- **PDF**: For merging operations

## Usage

1. **Converting Files to PDF**:
   - Navigate to the "Convert to PDF" tab
   - Upload a file by dragging and dropping or using the file browser
   - Click "Convert to PDF"
   - Download the converted file

2. **Merging PDF Files**:
   - Navigate to the "Merge PDFs" tab
   - Upload two PDF files
   - Click "Merge PDFs"
   - Download the merged file

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Flask](https://flask.palletsprojects.com/)
- [Bootstrap](https://getbootstrap.com/)
- [PyPDF2](https://pypdf2.readthedocs.io/)
- [ReportLab](https://www.reportlab.com/)
- [Pillow](https://python-pillow.org/)
