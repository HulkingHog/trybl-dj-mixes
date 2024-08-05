document.addEventListener("DOMContentLoaded", function() {
    const latestMixes = [
        { title: "Mix 1", url: "https://soundcloud.com/TRYBL/mix1" },
        { title: "Mix 2", url: "https://soundcloud.com/TRYBL/mix2" },
        { title: "Mix 3", url: "https://soundcloud.com/TRYBL/mix3" }
    ];

    const mixesContainer = document.getElementById("latest-mixes");
    latestMixes.forEach(mix => {
        const mixElement = document.createElement("div");
        mixElement.className = "mix";
        mixElement.innerHTML = `
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" 
                src="${mix.url}">
            </iframe>
            <p class="text-xl mt-2">${mix.title}</p>
        `;
        mixesContainer.appendChild(mixElement);
    });

    const allMixesContainer = document.getElementById("mixes");
    if (allMixesContainer) {
        latestMixes.forEach(mix => {
            const mixElement = document.createElement("div");
            mixElement.className = "mix";
            mixElement.innerHTML = `
                <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" 
                    src="${mix.url}">
                </iframe>
                <p class="text-xl mt-2">${mix.title}</p>
            `;
            allMixesContainer.appendChild(mixElement);
        });
    }
});