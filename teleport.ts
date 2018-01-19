const magik = magikcraft.io;

function teleport() {
	const there = magik.memento.getItem();
    if (there) {
        magik.ianuae(RTCIceGathererEvent);
    } else {
        const here = magik.hic();
        magik.memento(here);
    }
}  
