// Main JavaScript for PDF Converter

document.addEventListener('DOMContentLoaded', function() {
    // File upload preview functionality
    const fileInputs = document.querySelectorAll('.file-input');
    
    fileInputs.forEach(input => {
        input.addEventListener('change', function(e) {
            const fileNameElement = document.getElementById(this.id === 'file' ? 'file-name' : 
                                                          (this.id === 'file-merge-1' ? 'file-name-1' : 'file-name-2'));
            
            if (this.files && this.files.length > 0) {
                const fileName = this.files[0].name;
                const fileSize = (this.files[0].size / 1024).toFixed(2) + ' KB';
                fileNameElement.innerHTML = `<strong>${fileName}</strong> (${fileSize})`;
                
                // Check if file is valid
                const fileExtension = fileName.split('.').pop().toLowerCase();
                const allowedExtensions = ['pdf', 'jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff', 'txt', 'doc', 'docx', 'rtf'];
                
                if (!allowedExtensions.includes(fileExtension)) {
                    fileNameElement.innerHTML += '<br><span class="text-danger">Warning: Unsupported file format</span>';
                }
            } else {
                fileNameElement.textContent = 'No file selected';
            }
        });
    });
    
    // Drag and drop functionality for the main file upload area
    const dropArea = document.querySelector('.file-upload-area');
    if (dropArea) {
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, preventDefaults, false);
        });
        
        function preventDefaults(e) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        ['dragenter', 'dragover'].forEach(eventName => {
            dropArea.addEventListener(eventName, highlight, false);
        });
        
        ['dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, unhighlight, false);
        });
        
        function highlight() {
            dropArea.classList.add('highlight');
        }
        
        function unhighlight() {
            dropArea.classList.remove('highlight');
        }
        
        dropArea.addEventListener('drop', handleDrop, false);
        
        function handleDrop(e) {
            const dt = e.dataTransfer;
            const files = dt.files;
            
            if (files.length) {
                const fileInput = document.getElementById('file');
                fileInput.files = files;
                
                // Trigger the change event manually
                const event = new Event('change', { bubbles: true });
                fileInput.dispatchEvent(event);
            }
        }
    }
    
    // Form validation
    const convertForm = document.getElementById('convertForm');
    const mergeForm = document.getElementById('mergeForm');
    
    if (convertForm) {
        convertForm.addEventListener('submit', function(e) {
            const fileInput = document.getElementById('file');
            
            if (!fileInput.files || fileInput.files.length === 0) {
                e.preventDefault();
                alert('Please select a file to convert');
                return false;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Converting...';
            submitBtn.disabled = true;
            
            return true;
        });
    }
    
    if (mergeForm) {
        mergeForm.addEventListener('submit', function(e) {
            const fileInput1 = document.getElementById('file-merge-1');
            const fileInput2 = document.getElementById('file-merge-2');
            
            if (!fileInput1.files || fileInput1.files.length === 0 || !fileInput2.files || fileInput2.files.length === 0) {
                e.preventDefault();
                alert('Please select two PDF files to merge');
                return false;
            }
            
            // Check if both files are PDFs
            const ext1 = fileInput1.files[0].name.split('.').pop().toLowerCase();
            const ext2 = fileInput2.files[0].name.split('.').pop().toLowerCase();
            
            if (ext1 !== 'pdf' || ext2 !== 'pdf') {
                e.preventDefault();
                alert('Both files must be PDF documents');
                return false;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Merging...';
            submitBtn.disabled = true;
            
            return true;
        });
    }
    
    // Tooltips initialization (if using Bootstrap tooltips)
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});
