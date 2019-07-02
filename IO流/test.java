package document;

public class test  {	
	public static void main(String[] args) {
			documentCopy dc=new documentCopy();
			Thread t=new Thread(dc);
			t.start();
	}
}