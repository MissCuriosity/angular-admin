import { Menu } from '../data/menu';

export const MENU_LIST: Menu[] = [
    { icon: 'glyphicon-cloud', name: 'Dashboard', path: '/container/dashboard' },
    { icon: 'glyphicon-user', name: 'Documentation', path: '/container/documentation', children: [] },
    { icon: 'glyphicon-cloud', name: 'Permission', path: '/container/permission' },
    { icon: 'glyphicon-cloud', name: 'Icons', path: '/container/icons' },
    { icon: 'glyphicon-cloud', name: 'Components', path: '/container/components', children: [
            { icon: 'glyphicon-cloud', name: 'Tinymce', path: '/container/components/tinymce' },
            { icon: 'glyphicon-cloud', name: 'Markdown', path: '/container/components/markdown' },
            { icon: 'glyphicon-cloud', name: 'JSON Editor', path: '/container/components/json-editor' },
            { icon: 'glyphicon-cloud', name: 'Dnd List', path: '/container/components/nnd-list' },
            { icon: 'glyphicon-cloud', name: 'SplitPane', path: '/container/components/split-pane' },
            { icon: 'glyphicon-cloud', name: 'Avatar Upload', path: '/container/components/avatar-upload' },
            { icon: 'glyphicon-cloud', name: 'Dropzone', path: '/container/components/dropzone' },
            { icon: 'glyphicon-cloud', name: 'Sticky', path: '/container/components/sticky' },
            { icon: 'glyphicon-cloud', name: 'CountTo', path: '/container/components/countto' },
            { icon: 'glyphicon-cloud', name: 'Mixin', path: '/container/components/mixin' },
            { icon: 'glyphicon-cloud', name: 'BackToTop', path: '/container/components/back-to-top' }
        ]
    },
    { icon: 'glyphicon-cloud', name: 'Charts', path: '/container/charts', children: [
            { icon: 'glyphicon-cloud', name: 'Keyboard Chart', path: '/container/charts/keyboard-chart' },
            { icon: 'glyphicon-cloud', name: 'Line Chart', path: '/container/line-chart' },
            { icon: 'glyphicon-cloud', name: 'Mix Chart', path: '/container/mix-chart' }
        ]
    },
    { icon: 'glyphicon-cloud', name: 'Form', path: '/container/form', children: [
            { icon: 'glyphicon-cloud', name: 'Create Form', path: '/container/form/create' },
            { icon: 'glyphicon-cloud', name: 'Edit Form', path: '/container/form/edit' }
        ]
    },
    { icon: 'glyphicon-cloud', name: 'Error Pages', path: '/container/error-pages', children: [
            { icon: 'glyphicon-cloud', name: '401', path: '/container/error-pages/401' },
            { icon: 'glyphicon-cloud', name: '404', path: '/container/error-pages/404' }
        ]
    },
    { icon: 'glyphicon-cloud', name: 'Error Log', path: '/container/error-log' },
    { icon: 'glyphicon-cloud', name: 'Excel', path: '/container/excel', children: [
            { icon: 'glyphicon-cloud', name: 'Export Excel', path: '/container/excel/export-excel' },
            { icon: 'glyphicon-cloud', name: 'Export Selected', path: '/container/excel/export-selected-excel' },
            { icon: 'glyphicon-cloud', name: 'Upload Excel', path: '/container/excel/upload-excel' }
        ]
    },
    { icon: 'glyphicon-cloud', name: 'zip', path: '/container/zip', children: [
            { icon: 'glyphicon-cloud', name: 'Export Zip', path: '/container/zip/export-zip' }
        ]
    },
    { icon: 'glyphicon-cloud', name: 'Theme', path: '/container/theme' },
    { icon: 'glyphicon-cloud', name: 'Clipboard', path: '/container/clipboard' },
    { icon: 'glyphicon-cloud', name: 'I18n', path: '/container/i18n' }
];
