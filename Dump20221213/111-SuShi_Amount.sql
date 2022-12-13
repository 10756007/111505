-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 140.131.114.242    Database: 111-SuShi
-- ------------------------------------------------------
-- Server version	8.0.31-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Amount`
--

DROP TABLE IF EXISTS `Amount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Amount` (
  `year_month` date NOT NULL COMMENT '年月份',
  `Class` varchar(10) NOT NULL COMMENT '壽司的種類',
  `Name` varchar(45) NOT NULL COMMENT '壽司的名稱',
  `Chinese_Name` varchar(45) NOT NULL COMMENT '壽司的中文名稱',
  `Ave` double NOT NULL COMMENT '壽司平均擺放時長（分)',
  `Count` int NOT NULL COMMENT '每類壽司一個月的總數量（盤）',
  `Regret` int NOT NULL COMMENT '後悔數量',
  PRIMARY KEY (`Name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Amount`
--

LOCK TABLES `Amount` WRITE;
/*!40000 ALTER TABLE `Amount` DISABLE KEYS */;
INSERT INTO `Amount` VALUES ('2022-11-28','H','Arctic Surf Clam','北寄貝壽司',2.12,150,0),('2022-11-28','I','Crab Meat','蟹肉棒壽司',2.15,80,4),('2022-11-28','F','Eel','鰻魚壽司',1.52,90,0),('2022-11-28','D','Fried Tofu','稻荷壽司',2,100,4),('2022-11-28','J','Octopus','章魚壽司',2.01,70,5),('2022-11-28','A','Salmon','鮭魚壽司',2.33,120,8),('2022-11-28','C','Salmon roe','鮭魚卵壽司',1.96,150,1),('2022-11-28','B','Shrimp','鮮蝦壽司',17.8,110,6),('2022-11-28','G','Tamagoyaki','玉子燒壽司',1.65,110,0),('2022-11-28','E','Tuna','鮪魚壽司',1.65,130,3);
/*!40000 ALTER TABLE `Amount` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-13 14:57:54
