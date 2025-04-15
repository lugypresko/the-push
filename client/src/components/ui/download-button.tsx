
import { Button } from "./button"

export function DownloadButton() {
  const handleDownload = async () => {
    try {
      const response = await fetch('/api/download-pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'program.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <Button onClick={handleDownload} variant="default">
      הורד תוכנית מפורטת
    </Button>
  );
}
