export type IComment = {
    commentId : number;
    commentContent: string;
    replies?: IComment[];
}

const comments: IComment[] = [
    {
        commentId: 1,
        commentContent: 'Hai',
        replies: [
            {
                commentId: 11,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 111,
                        commentContent: 'Haai juga hai jugaa'
                    },
                    {
                        commentId: 112,
                        commentContent: 'Haai juga hai jugaa'
                    }
                ]
            },
            {
                commentId: 12,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 121,
                        commentContent: 'Haai juga hai jugaa'
                    }
                ]
            }
        ]
    },
    {
        commentId: 2,
        commentContent: 'Halooo'
    }
]

const commentCount = (data: IComment[]) => {
    let counter = 0
    data.map(piece => {
        if (piece.commentContent) {
            console.log(piece.commentContent)
            counter++
        }
        if (piece.replies) {
            piece.replies.map(piece2 =>{
                if (piece2.commentContent) {
                    console.log(piece2.commentContent)
                    counter++
                }
                if (piece2.replies) {
                    piece2.replies.map(piece3 =>{
                        if (piece3.commentContent) {
                            console.log(piece3.commentContent)
                            counter++
                        }
                    })
                }
            })
        }
    })
    console.log(counter);    
}
commentCount(comments)

