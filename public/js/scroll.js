const setupScrooling = () => {
    const container = [... document.querySelectorAll(".movie-container")]
    const nextBtn = [... document.querySelectorAll(".next-btn")]
    const prevBtn = [... document.querySelectorAll(".pre-btn")]

    container.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect()
        let containerWidht = containerDimensions.width

        nextBtn[i].addEventListener("click", () => {
            item.scrollLeft += containerWidht
        })

        prevBtn[i].addEventListener("click", () => {
            item.scrollLeft -= containerWidht
        })
    })
}