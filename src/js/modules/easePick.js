import { easepick, TimePlugin } from '@easepick/bundle';

export default function easePick() {
    const picker = new easepick.create({
        element: document.getElementById('datepicker'),
        css: [
            'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
            'https://cdn.jsdelivr.net/npm/@easepick/time-plugin@1.2.1/dist/index.css'
        ],
        zIndex: 10,
        plugins: [TimePlugin],
        TimePlugin: {
            format: 'HH:mm',
        },
        format: "MM/DD/YYYY HH:mm"
    });
}