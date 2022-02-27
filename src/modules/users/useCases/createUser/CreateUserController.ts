import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { email, name } = request.body;
      const createdUser = this.createUserUseCase.execute({ email, name });
      return response.status(201).json(createdUser);
    } catch (error) {
      return response.status(400).json({
        error: error.message,
      });
    }
  }
}

export { CreateUserController };
