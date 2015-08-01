using System;
using System.Collections.Generic;
using AdaHttpHandler;

namespace IAM.HttpHandlers
{
	[AdaHttpHandlerClass("KitapServisi")]
	public class KitapHttpHandler
	{
		[AdaHttpHandlerMethod("TumKitaplariAl")]
		public List<Kitap> TumKitaplariAl()
		{
			Kitap kitap1 = new Kitap
			{
				name = "Introduction to Programminggg",
				price = 100,
				pubdate = DateTime.Now,
				cover = "img/the-book-of-trees.jpg",
				likes = 10,
				dislikes = 1
			};
			Kitap kitap2 = new Kitap
			{
				name = "Küçük Prens",
				price = 200,
				pubdate = DateTime.Now.AddYears(1),
				cover = "img/program-or-be-programmed.jpg",
				likes = 100,
				dislikes = 200
			};
			List<Kitap> kitaplar = new List<Kitap> { kitap1, kitap2 };
			return kitaplar;
		}

		[AdaHttpHandlerMethod("LikeArttir")]
		public int LikeArttir(string kitapAd)
		{
			//veritabanında git ilgilşi kitabın like adedini arttır
			return 22*2;
		}
	}

	public class Kitap
	{
		public string name;
		public double price;
		public DateTime pubdate;
		public string cover;
		public int likes;
		public int dislikes;
	}
}
