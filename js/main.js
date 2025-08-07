fetch('data/data.json')
    .then(res => res.json())
    .then(data => {
        renderSection('handlebars/header.hbs', data.header);
        renderSection('handlebars/hero.hbs', data.hero);
        renderSection('handlebars/cards.hbs', { cards: data.cards });
        renderSection('handlebars/description.hbs', { text: data.description });
        renderSection('handlebars/form.hbs', data.form);
        renderSection('handlebars/testimonials.hbs', { testimonials: data.testimonials });
        renderSection('handlebars/footer.hbs', data.footer);
    });

function renderSection(templatePath, context) {
    fetch(templatePath)
        .then(res => res.text())
        .then(source => {
            const template = Handlebars.compile(source);
            const html = template(context);
            document.getElementById('app').innerHTML += html;
        });
}
