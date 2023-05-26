import { Skipper } from "../models/skipperTable";

/**
 * @author Youri Janssen
 * @description This function gets all skippers from the database.
 * @returns A promise with all skippers of type Skipper[].
 */
export async function getAllSkippers(): Promise<Skipper[]> {
  const skipper = await Skipper.findAll({ raw: true });
  return skipper;
}

/**
 * @author Youri Janssen
 * @description This function gets a skipper from the database with a given id.
 * @returns A promise with a skipper of type Skipper.
 */
export async function getSkippersFromDBWithID(id: string): Promise<Skipper | null> {
  const skipper = await Skipper.findByPk(id, { raw: true });
  return skipper;
}

/**
 * @author Youri Janssen
 * @description This function updates a skipper in the database with a given id.
 * @param skipperBody.naam The name of the skipper.
 * @param skipperBody.top The top of the skipper (true or false).
 * @param skipperBody.id The id of the skipper.
 */
export async function updateSkipperWhereID(skipperBody: Skipper): Promise<void> {
  await Skipper.update({ naam: skipperBody.naam, top: skipperBody.top }, { where: { id: skipperBody.id } });
}
