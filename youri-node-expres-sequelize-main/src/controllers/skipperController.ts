import { Request, Response } from "express";
import { Model } from "sequelize-typescript";
import { SkipperService } from "../services/skipperService";

export class SkipperController {
  constructor() {}

  /**
   * @author Youri Janssen
   * @description This functions checks if the request body is valid.
   * @if The request body is valid, response.status(200).json() will be called.
   * @else The response.status(400).json() will be called.
   */
  public async getSkippers(response: Response): Promise<void> {
    let retValue: Model[] = await new SkipperService().getSkippers();
    if (retValue.length !== 0) {
      response.status(200).json(retValue);
    } else {
      response.status(400).json();
    }
  }

  /**
   * @author Youri Janssen
   * @description This functions checks if the request body is valid.
   * @if The request body is valid, response.status(200).json() will be called.
   * @else The response.status(400).json() will be called.
   */
  public async getSkipperById(request: Request, response: Response): Promise<void> {
    let retValue: Model | null = await new SkipperService().getSkipperById(+request.params.id);

    if (retValue !== null) {
      response.status(200).json(retValue);
    } else {
      response.status(404).json();
    }
  }

  /**
   * @author Youri Janssen
   * @description This functions checks if the request body is valid.
   * @if The request body is valid, response.status(200).json() will be called.
   * @else The response.status(400).json() will be called.
   */
  public async updateSkipper(request: Request, response: Response): Promise<void> {
    let retValue: boolean = await new SkipperService().updateSkipper(+request.body.id, request.body.name);

    if (retValue) {
      response.status(200).json();
    } else {
      response.status(404).json();
    }
  }
}
