
import path from 'path';

export const downloadPdf = async (req: any, res: any) => {
  const filePath = path.join(__dirname, '../public/assets/program.pdf');
  res.download(filePath);
};

import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      
      // In a real application, we'd store this in the database
      // For now, we'll just log it
      console.log("Contact form submission:", contactData);
      
      // Return success
      res.status(200).json({ 
        success: true, 
        message: "Contact form submitted successfully" 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      }
      
      res.status(500).json({ 
        success: false, 
        message: "An error occurred while processing your request" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
