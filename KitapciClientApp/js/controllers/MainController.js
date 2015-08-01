app.controller('MainController', ['$scope', '$http', function ($scope, $http)
{
    $scope.sunucudanKitaplariAl = function()
    {

        $http.post("KitapServisi.TumKitaplariAl.iam", null).success(function (data)
        {

            $scope.products = data;
        });

        //return [
        //{
        //    name: 'The Book of Trees',
        //    price: 19,
        //    pubdate: new Date('2014', '03', '08'),
        //    cover: 'img/the-book-of-trees.jpg',
        //    likes: 0,
        //    dislikes: 0
        //},
        //{
        //    name: 'Program or be Programmed',
        //    price: 8,
        //    pubdate: new Date('2013', '08', '01'),
        //    cover: 'img/program-or-be-programmed.jpg',
        //    likes: 0,
        //    dislikes: 0
        //}, {
        //    name: "The Short History of Almost Everything",
        //    price: 17,
        //    pubdate: new Date("2008", "11", "07"),
        //    cover: "http://ecx.images-amazon.com/images/I/41Z3XNXTcHL.jpg",
        //    likes: 0,
        //    dislikes: 0

        //}, {
        //    name: "Chinese Dream",
        //    price: 11,
        //    pubdate: new Date("2007", "06", "03"),
        //    cover: "http://ecx.images-amazon.com/images/I/41Wri1XYSNL._SY344_BO1,204,203,200_.jpg",
        //    likes: 0,
        //    dislikes: 0
        //}
        //];
    }

    //constructor of controller
    $scope.title = 'This Month\'s Bestsellers';

    $scope.promo = 'The most popular books this month.';

    //$scope.products = $scope.sunucudanKitapVerisiniAl();
    $scope.sunucudanKitaplariAl();

    $scope.plusOne = function (product)
    {
        //$scope.products[index].likes += 1;
        product.likes += 1;
        $http.post("KitapServisi.LikeArttir.iam", [product.name]).success(function (data)
        {
            alert(data);
        });
    }
    $scope.minusOne = function (index)
    {
        $scope.products[index].dislikes += 1;
    }


}]);
