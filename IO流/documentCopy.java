package document;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Date;
import java.util.concurrent.locks.ReentrantLock;


public class documentCopy implements Runnable {
	ReentrantLock lock=new ReentrantLock();
public static void filePathDou(String docu1,String docu2)  throws IOException {
		
		FileInputStream fis=new FileInputStream(docu1);
		BufferedInputStream bis=new BufferedInputStream(fis);
		FileOutputStream fos=new FileOutputStream(docu2);
		BufferedOutputStream bos=new BufferedOutputStream(fos);
		byte[]size=new byte[1024];
		int len=0;
		while((len=bis.read(size))!=-1) {
			bos.write(size, 0, len);
		}
		fis.close();
		bis.close();
		bos.close();
		fos.close();
	}
	
	

	public static void getDocument(String fs,String fs2) throws IOException {
		File f1=new File(fs);
		File f2=new File(fs2);
		File[] fList=f1.listFiles();
		if(!f2.exists()) {
			f2.mkdir();			
		}else {
			delFile(f2.listFiles());
		}
		
		
		for(File f:fList) {
			if(f.isFile()) {
				filePathDou(f.getPath(),f2.getPath()+"\\"+f.getName());
			}else {
				getDocument(fs+"\\"+f.getName(),fs2+"\\"+f.getName());
			}
		}
	}
	
	public static void delFile(File []f1) {
		for(File f:f1) {
			f.delete();
		}
	}
	
	@Override
	public  void run() {
		// TODO Auto-generated method stub
		lock.lock();
		try {	
		for(;;) {
		try {
			//想要定时的时间单位为毫秒
			Thread.sleep(5000);
			//源文件夹,目标文件夹
			getDocument("\\\\10.12.0.8\\it","D:\\COPY");
			System.out.println("完成-------"+new Date());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		}	
		} finally {
			lock.unlock();
		}
	}
}
