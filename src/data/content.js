const content= [
    {
        id : 1,
        icon:  'fa fa-bell fa-xs',
        label: 'Dashboard',
        to: '#a-link1',
        active : false,
    },
    {
        id : 2,
        icon:  'fab fa-adn fa-xs',
        label: 'Layouts',
        to: '#a-link2',
        active : false,
    },
    {
        id : 3,
        icon:  'fab fa-airbnb fa-xs',
        label: 'Graphs',
        to: '#a-link3',
        active : false,
        content: [
            {
                id : 4,
                icon: 'anchor',
                label: 'Float Chart',
                to: '#another-link',
            },
            {
                id : 5,
                icon: 'fas fa-allergies fa-xs',
                label: 'Pie Chart',
                to: '#another-link',
            }
        ]
    },
    {
        id : 6,
        icon: 'fab fa-angellist fa-xs',
        label: 'Mailbox',
        active : false,
        content: [
            {
                id : 7,
                icon: 'fab fa-airbnb  fa-xs',
                label: 'Label 11',
                to: '#another-link',
            },
        ],
    },
    {
        id : 7,
        icon: 'fab fa-angellist fa-xs',
        label: 'Toolbox',
        active : false,
        content: [
            {
                id : 11,
                icon: 'fab fa-airbnb  fa-xs',
                label: 'Label 11',
                to: '#another-link',
            },
        ],
    },
    {
        id : 8,
        icon: 'fab fa-angellist fa-xs',
        label: 'CheckBox',
        active : false,
        content: [
            {
                id : 9,
                icon: 'fab fa-airbnb  fa-xs',
                label: 'Label 13',
                to: '#another-link',
            },
            {
                id : 10,
                icon: 'fab fa-airbnb  fa-xs',
                label: 'Label 14',
                to: '#another-link',
            },
        ],
    },
];


export default content;
