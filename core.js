(() => {
    // repeat
    document.querySelectorAll('[repeat]').forEach((repeatEl) => {
        const scope = {};
        console.log();

        const args = repeatEl.attributes[0].value.split(' ');

        if (args.length !== 3) {
            throw new Error('repeat: expected 3 keywords');
        }
    });
})();