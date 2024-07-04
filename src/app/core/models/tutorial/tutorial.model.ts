export class TutorialModel {
    constructor(
        Id: Number,
        Title: string,
        Abstract: string,
        Description: string,
        VideoUrls: string[],
        ImageUrls: string[]
    ) {
        this.Id = Id
        this.Title = Title
        this.Abstract = Abstract
        this.Description = Description
        this.VideoUrls = VideoUrls
        this.ImageUrls = ImageUrls
    }
    public Id: Number;
    public Title: string;
    public Abstract: string;
    public Description: string;
    public VideoUrls: string[];
    public ImageUrls: string[];
}