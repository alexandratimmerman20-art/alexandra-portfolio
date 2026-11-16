// ROOM COLORS

const roomPreview = document.getElementById("roomPreview");
const roomSofa = document.getElementById("roomSofa");
const roomRug = document.getElementById("roomRug");

const wallColor = document.getElementById("wallColor");
const sofaColor = document.getElementById("sofaColor");

function updateRoom() {
    if (!roomPreview) return;

    roomPreview.style.backgroundColor = wallColor.value;
    roomSofa.style.backgroundColor = sofaColor.value;
}

document.querySelectorAll(".color-option").forEach(button => {
    button.addEventListener("click", () => {
        wallColor.value = button.dataset.wall;
        updateRoom();
    });
});

document.querySelectorAll(".furniture-option").forEach(button => {
    button.addEventListener("click", () => {
        sofaColor.value = button.dataset.sofa;
        updateRoom();
    });
});

wallColor.addEventListener("input", updateRoom);
sofaColor.addEventListener("input", updateRoom);


// SEATING OPTIONS

document.querySelectorAll(".seating-option").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".seating-option").forEach(item => {
            item.classList.remove("selected");
        });

        button.classList.add("selected");

        roomSofa.className = "room-sofa " + button.dataset.seating;
    });
});


// COLOR PALETTES

const palettes = {
    earth: ["#E9DFD0", "#A87961", "#B7A58C"],
    coastal: ["#DCE8E5", "#829DA8", "#B7C9C7"],
    modern: ["#D8D5CE", "#55534F", "#A8A8A2"],
    colorful: ["#D7AAA5", "#829DA8", "#D6B65C"],
    warm: ["#E6D2B9", "#7B4545", "#C59C6D"]
};

document.querySelectorAll(".palette-button").forEach(button => {
    button.addEventListener("click", () => {
        const colors = palettes[button.dataset.palette];

        wallColor.value = colors[0];
        sofaColor.value = colors[1];
        roomRug.style.backgroundColor = colors[2];

        updateRoom();
    });
});


// RESET ROOM

document.getElementById("resetRoom").addEventListener("click", () => {
    wallColor.value = "#E9DFD0";
    sofaColor.value = "#A87961";

    roomSofa.className = "room-sofa";
    roomRug.style.backgroundColor = "#B7A78C";

    updateRoom();

    document.querySelectorAll(".seating-option").forEach(item => {
        item.classList.remove("selected");
    });
});


// MATERIAL OPTIONS

const materials = {
    oak: {
        title: "Oak",
        description: "A warm natural wood that adds texture and timeless character.",
        color: "#C59C6D"
    },

    terrazzo: {
        title: "Terrazzo",
        description: "A decorative surface with small stone chips and playful patterns.",
        color: "#D8D0C3"
    },

    boucle: {
        title: "Bouclé",
        description: "A soft, textured fabric that adds warmth and comfort to seating.",
        color: "#E8DFD0"
    },

    glass: {
        title: "Glass",
        description: "A versatile material that brings lightness and transparency.",
        color: "#A9C7C7"
    },

    marble: {
        title: "Marble",
        description: "A natural stone with unique veining and an elegant appearance.",
        color: "#E8E5DE"
    },

    concrete: {
        title: "Concrete",
        description: "A modern material that creates a clean, simple, industrial feel.",
        color: "#A8A8A2"
    }
};

document.querySelectorAll(".material-swatch").forEach(button => {
    button.addEventListener("click", () => {
        const material = materials[button.dataset.material];

        document.getElementById("materialTitle").textContent = material.title;
        document.getElementById("materialDescription").textContent = material.description;
        document.getElementById("materialChip").style.backgroundColor = material.color;
    });
});