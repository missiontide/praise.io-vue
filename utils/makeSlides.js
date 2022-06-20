import PptxGenJS from "pptxgenjs";
import { titleSlideStyle, lyricSlideStyle } from './slideStyles.js'

/**
 * Makes a PowerPoint presentation out of an array of songObjects
 * @param selectedSongIds list of song ids in selection order
 * @param songObjectsArray each Song object has keys: id, title, artist, lyrics (a list that needs to be JSON.parsed)
 */
async function makeSlides(selectedSongIds, songObjectsArray) {

    // a list of Song objects in order of selection
    const orderedSongObjects = [];
    selectedSongIds.forEach(selectedSongId => {
        orderedSongObjects.push(
            songObjectsArray.find(songObject => songObject.id === selectedSongId)
        )
    });

    // generate slides using pptxgenjs
    let pres = new PptxGenJS();

    // duplicate handling -- for preserving order
    let usedSongTitles = [];
    const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

    orderedSongObjects.forEach(songObject => {
        // add song title
        const songTitle = songObject.title;
        let sectionTitle = songTitle;

        // duplicate handling ... same title section will ruin order
        let occurrences = countOccurrences(usedSongTitles, songTitle);
        if (occurrences > 0) {sectionTitle = sectionTitle + " (" + occurrences.toString() + ")"}

        pres.addSection({ title: sectionTitle})
        let slide = pres.addSlide({ sectionTitle: sectionTitle});
        slide.addText(songTitle, titleSlideStyle);

        // add song lyrics
        JSON.parse(songObject['lyrics']).forEach(lyric => {
            let slide = pres.addSlide({ sectionTitle: sectionTitle});
            slide.addText(lyric, lyricSlideStyle);
        })

        // duplicate handling
        usedSongTitles.push(songTitle);
    })

    // save the presentation
    await pres.writeFile({fileName: 'praiseio-worship-slides.pptx'});
}

export default makeSlides;