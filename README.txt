# Birthday Surprise Website

A responsive birthday gift website built with HTML, CSS, and JavaScript.

## Personalize it

1. Open `index.html` and replace `amazing human` with your friend's name or nickname.
2. Edit the birthday note inside the `#letterModal` section in `index.html`.
3. Add your photos to `assets/photos/` and name them exactly:
   - `photo1.jpg`
   - `photo2.jpg`
   - `photo3.jpg`
   You can use `.png` or `.webp` too, but then update the matching `src` paths in `index.html`.
4. Add your song as `assets/song.mp3`. Use an MP3 you have permission to share. The music button also lets the visitor choose an audio file from their device, but that local choice is not shared with other visitors.
5. Open `index.html` in your browser to test the site.

## Deploy free with Netlify

### Quick way: Netlify Drop
1. Keep the folder structure exactly as it is.
2. Sign in or create an account at https://app.netlify.com/drop
3. Drag the whole `birthday-surprise-site` folder onto the drop area (or zip it first if the interface asks for a ZIP).
4. Netlify publishes the website and gives you a public URL ending in `netlify.app`.
5. Open that URL on your phone and test the music, note, and photos.

### If you update it later
Drag the updated site folder to the deploy/drop area again, or connect a GitHub repository in Netlify for easier updates.

## Important notes
- Music does not autoplay reliably on phones; visitors should tap the music button.
- The song and photo files are part of the public website once deployed. Don't upload private photos or copyrighted music unless you have permission to share them.
- Google Fonts requires an internet connection; the site still works with fallback fonts if offline.
