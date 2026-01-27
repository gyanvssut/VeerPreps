

export interface materialResponse {
    message: string
    materials: {
        pyqs: [
            {
                pyq_id: string
                subjectId: string,
                links: string,
                pyqtype: string,
                pyqname: string,
                pyqyear: string
            },
        ],
        notes: [
            {
                notes_id: string,
                subjectId: string,
                link: string
                notesname: string
            },
        ],
        videos: [
            {
                video_id: string,
                subjectId: string,
                link: string,
                videoname: string
            }

        ],
        subjectname: string,
        branchname: string
    },
  
}

export interface yearResponse{
    message: string,
    years:[
        {
           year_id: string,
            branchId: string,
            yearName: string
        }
    ]
}

