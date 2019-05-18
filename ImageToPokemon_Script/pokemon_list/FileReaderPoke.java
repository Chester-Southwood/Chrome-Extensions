import java.io.File;
import java.io.*;
import java.util.Scanner;
public class FileReaderPoke
{
   public static void main(String[] args) throws Exception
   {
      File file = new File("C:\\Users\\User\\source\\repos\\ASP.NetCoreBiginner\\ASP.NetCoreBiginner\\wwwroot\\documents\\pokemonList.txt");
      Scanner sc = new Scanner(file);
      
      String[] pokeStringList = new String[802];
      for(int i = 0; sc.hasNextLine(); i++)
      {
         pokeStringList[i] = sc.nextLine();
      }
      
      File newFile = new File("pokemonList.txt");
      PrintStream ps = new PrintStream(newFile);
      for(int i = 0; i < pokeStringList.length; i++)
      {
         if(i != pokeStringList.length - 1)
         {
            ps.print("'" + pokeStringList[i] + "', \n");
         }
         else
         {
            ps.print("'" + pokeStringList[i] + "'");
         }
      }
   }
}