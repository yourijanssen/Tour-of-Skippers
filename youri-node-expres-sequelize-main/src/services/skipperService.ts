import { Model } from "sequelize-typescript";
import { Skipper } from "../data/models/skipperTable";

export class SkipperService {
  /**
   * @author Youri Janssen
   * @returns A promise with all skippers with attributes "id", "name" and "top".
   */
  public async getSkippers(): Promise<Model[]> {
    return await Skipper.findAll({
      attributes: ["id", "name", "top"],
    });
  }

  /**
   * @author Youri Janssen
   * @returns A promise with a skipper with attributes "id", "name" and "top".
   */
  public async getSkipperById(id: number): Promise<Model | null> {
    return await Skipper.findByPk(id, {
      attributes: ["id", ["naam", "name"], "top"],
    });
  }

  /**
   * @author Youri Janssen
   * @returns A promise with a boolean if the skipper is updated.
   */
  public async updateSkipper(id: number, name: string): Promise<boolean> {
    let affectedRows: number[] = await Skipper.update({ naam: name }, { where: { id: id } });
    return affectedRows[0] === 1 ? true : false;
  }
}
