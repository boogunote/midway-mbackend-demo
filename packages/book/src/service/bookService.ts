import { Provide } from '@midwayjs/decorator';

@Provide()
export class BookService {

  async getBook(id?: number) {

    const books = [
      {
        id: 1,
        name: '小森林',
        ISBN: '9787541089329',
        desc: '《小森林》是知名漫画家五十岚大介的经典作品，也是豆瓣高分电影《小森林》原著，讲述一位平凡女孩在田园生活中寻找自我的故事。'
      },
      {
        id: 2,
        name: '这辈子',
        ISBN: '9787541156700',
        desc: '人活百年，看到的世界有何不同？本书是由一位百岁老人口述自己经历、孙女加以记录编纂的故事集。'
      },
      {
        id: 3,
        name: '赤朽叶家的传说',
        ISBN: '9787532175505',
        desc: '一边是山野神隐中的八岐大蛇、千里眼、野貉父子、财神惠比寿； 一边是泡沫经济下的暴走女郎、尼特族、热血漫画、超自然热潮！'
      }
    ];

    if(id) {
      return books.filter(book => {
        return book.id === id;
      });
    }

    return books;
  }
}
