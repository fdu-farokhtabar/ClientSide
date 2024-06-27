// package: 
// file: tutorial.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class TutorialResponseMessage extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getAbstract(): string;
  setAbstract(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearVideourlsList(): void;
  getVideourlsList(): Array<string>;
  setVideourlsList(value: Array<string>): void;
  addVideourls(value: string, index?: number): string;

  clearImageurlsList(): void;
  getImageurlsList(): Array<string>;
  setImageurlsList(value: Array<string>): void;
  addImageurls(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TutorialResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: TutorialResponseMessage): TutorialResponseMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TutorialResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TutorialResponseMessage;
  static deserializeBinaryFromReader(message: TutorialResponseMessage, reader: jspb.BinaryReader): TutorialResponseMessage;
}

export namespace TutorialResponseMessage {
  export type AsObject = {
    id: number,
    title: string,
    pb_abstract: string,
    description: string,
    videourlsList: Array<string>,
    imageurlsList: Array<string>,
  }
}

export class TutorialsResponseMessage extends jspb.Message {
  clearTutorialsList(): void;
  getTutorialsList(): Array<TutorialResponseMessage>;
  setTutorialsList(value: Array<TutorialResponseMessage>): void;
  addTutorials(value?: TutorialResponseMessage, index?: number): TutorialResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TutorialsResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: TutorialsResponseMessage): TutorialsResponseMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TutorialsResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TutorialsResponseMessage;
  static deserializeBinaryFromReader(message: TutorialsResponseMessage, reader: jspb.BinaryReader): TutorialsResponseMessage;
}

export namespace TutorialsResponseMessage {
  export type AsObject = {
    tutorialsList: Array<TutorialResponseMessage.AsObject>,
  }
}

