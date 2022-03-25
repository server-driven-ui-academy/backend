import { Injectable } from '@nestjs/common';

@Injectable()
export class SwiftuiService {
  getHome() {
    return {
      widgets: [
        {
          identifier: 'SECTION_TITLE',
          title: 'Seção 1',
        },
        {
          identifier: 'CIRCLE_COLLECTION',
          list: [
            {
              title: 'Título 1',
              color: 'F28F5C',
            },
            {
              title: 'Título 2',
              color: 'FC7F60',
            },
            {
              title: 'Título 3',
              color: 'E66962',
            },
            {
              title: 'Título 4',
              color: 'FC6093',
            },
            {
              title: 'Título 5',
              color: 'F25CD9',
            },
          ],
          itemAction: {
            identifier: 'SCREEN_SERVER',
            url: 'pageone',
          },
        },
        {
          identifier: 'SECTION_TITLE',
          title: 'Seção 2',
        },
        {
          identifier: 'GRID',
          list: [
            {
              title: 'Grid 1',
              color: 'BF79F2',
            },
            {
              title: 'Grid 2',
              color: 'A57EFC',
            },
            {
              title: 'Grid 3',
              color: '817EE6',
            },
            {
              title: 'Grid 4',
              color: '7E9BFC',
            },
          ],
          itemAction: {
            identifier: 'SCREEN_SERVER',
            url: 'pageone',
          },
        },
        {
          identifier: 'BANNER',
          title: 'Banner',
          color: 'E60C00',
          titleColor: 'FFFFFF',
          itemAction: {
            identifier: 'SCREEN_SERVER',
            url: 'pageone',
          },
        },
        {
          identifier: 'SECTION_TITLE',
          title: 'Seção 3',
        },
        {
          identifier: 'RECTANGLE_COLLECTION',
          list: [
            {
              title: 'Título 1',
              text: 'Subtítulo',
              color: 'E6AB00',
            },
            {
              title: 'Título 2',
              text: 'Subtítulo',
              color: 'FCA80D',
            },
            {
              title: 'Título 3',
              text: 'Subtítulo',
              color: 'F2870C',
            },
          ],
          itemAction: {
            identifier: 'SCREEN_SERVER',
            url: 'pageone',
          },
        },
      ],
    };
  }

  getPageOne(color: string) {
    return {
      widgets: [
        {
          identifier: 'BANNER',
          title: 'Banner',
          color: color,
          titleColor: 'FFFFFF',
        },
        {
          identifier: 'LIST',
          list: [
            {
              text: 'Lista Item 1',
            },
            {
              text: 'Lista Item 2',
            },
            {
              text: 'Lista Item 3',
            },
            {
              text: 'Lista Item 4',
            },
          ],
          itemAction: {
            identifier: 'SCREEN_SERVER',
            url: 'pagetwo',
          },
        },
      ],
    };
  }

  getPageTwo() {
    return {
      widgets: [
        {
          identifier: 'SECTION_TITLE',
          title: 'Página 2',
        },
      ],
    };
  }
}
