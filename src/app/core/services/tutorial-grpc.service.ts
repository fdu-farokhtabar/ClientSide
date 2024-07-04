import { TutorialModel } from 'src/app/core/models/tutorial/tutorial.model';
import { AuthService } from '../models/account/auth.service';
import { Constant } from 'src/app/shared/helper/constant';
import { TutorialResponseMessage, TutorialsResponseMessage } from '../protos/generated/tutotrial/tutorial_pb';
import { ServiceHelper } from './service.helper';
import { ServiceError, TutorialSrv, TutorialSrvClient } from '../protos/generated/tutotrial/tutorial_pb_service';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
export class TutorialGrpcService {
    constructor(private account: AuthService) {
    }

    public GetAll(): Promise<TutorialModel[]> {
        return new Promise<TutorialModel[]>((resolve, reject) => {
            const client = new TutorialSrvClient(Constant.ServiceHost);
            const request = new Empty();
            const metadata = ServiceHelper.CreateAuthToken(this.account);
            if (metadata != undefined) {
                client.getAll(request,metadata, (error: ServiceError | null, response: TutorialsResponseMessage | null) => {
                    if (error != null) {
                        return reject();
                    }
                    if (response == null) {
                        return reject();
                    }                
                    const tutorials = response.getTutorialsList().map(tut=> <TutorialModel>({
                        Id : tut.getId(),
                        Title: tut.getTitle(),
                        Abstract: tut.getAbstract(),
                        Description: tut.getDescription(),
                        ImageUrls: tut.getImageurlsList(),
                        VideoUrls: tut.getVideourlsList()
                    }));
                    return resolve(tutorials);
                });
            }
            else
                alert("Please login.");
        });
    }
}