-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: k8a404.p.ssafy.io    Database: selog
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `user_id` bigint NOT NULL AUTO_INCREMENT,
  `created_date` datetime(6) DEFAULT NULL,
  `modified_date` datetime(6) DEFAULT NULL,
  `algo_start_date` datetime(6) DEFAULT NULL,
  `authority` varchar(255) DEFAULT NULL,
  `baekjoon` varchar(255) DEFAULT NULL,
  `blog` varchar(255) DEFAULT NULL,
  `blog_target` varchar(255) DEFAULT NULL,
  `blog_start_date` datetime(6) DEFAULT NULL,
  `boj_target` varchar(255) DEFAULT NULL,
  `character_id` int DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `cs_target` bit(1) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `feed_target` bit(1) DEFAULT NULL,
  `github` varchar(255) DEFAULT NULL,
  `github_target` varchar(255) DEFAULT NULL,
  `github_token` varchar(255) DEFAULT NULL,
  `github_start_date` datetime(6) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `motto` varchar(255) DEFAULT NULL,
  `nickname` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `points` int NOT NULL DEFAULT '0',
  `refresh_token` varchar(255) DEFAULT NULL,
  `tistory_token` varchar(255) DEFAULT NULL,
  `cs_start_date` datetime DEFAULT NULL,
  `feed_start_date` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (2,'2023-05-12 14:08:47.043921','2023-05-19 09:57:55.847314','2023-05-17 20:48:01.490171','ROLE_USER',NULL,'https://sellog404.tistory.com/','7-1','2023-05-17 20:48:01.490173','1-1',1,'sdjlsf@gmail.com',_binary '','burgerfacegirl',_binary '',NULL,'1-1','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','2023-05-17 20:48:01.490164','https://avatars.githubusercontent.com/u/109276569?v=4','타협은 후퇴다','호정','$2a$10$4p2cbH2vmGapeIHfN0ijauIhlF6MogYsy3A/u4y7z96.6OUVpfnaq',14,'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2ODQ5MzgyMTd9.4R6ysLmZAY-c2FasDVTo6a5YjgaGv1XZzQfOoXaoef-mOPHGwbKllWCaft8-11kRD55OyYybjIZ4jSHIubtraA',NULL,'2023-05-19 09:57:56','2023-05-17 20:48:01'),(4,'2023-05-12 14:10:44.209422','2023-05-18 22:25:39.153315','2023-05-18 11:02:38.926294','ROLE_USER',NULL,'dafsf','7-1','2023-05-18 11:02:38.926295','1-1',0,'jayulfrontend@gmail.com',_binary '','Sellog404',_binary '','sadfaf','1-1','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','2023-05-18 11:02:38.926291','https://avatars.githubusercontent.com/u/133289007?v=4','타협은 후퇴다.','셀로그','$2a$10$ZCUKr5z4fEiHMmJINiddNOwLohVTUvY03qQEmEJ7ojl/kGF.HyNma',990135,'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2ODUwMDk4MTh9.XYOwz8pfvxoaAxQlywxVL73vAtS_lDq0nIlCvlVReUltWugKxqomeLe9G6y3ihJexmpdAEhAKvza-m60NmF-CA',NULL,'2023-05-18 11:02:39','2023-05-18 11:02:39'),(6,'2023-05-12 15:58:18.303655','2023-05-12 15:59:23.297502','2023-05-12 14:29:12.955616','ROLE_USER',NULL,NULL,'7-1','2023-05-16 12:35:00.738302','1-1',NULL,NULL,_binary '\0','jayulfrontend@gmail.com',_binary '\0',NULL,'',NULL,'2023-05-16 10:58:27.990713','1',NULL,'sellog404','$2a$10$S/bflS3Shu8X2JVASKp7Fu5Y2azDEO9QCPo/H.d9UiadD9dhW4SHm',0,'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2ODQ0Nzk1NjN9.jF_s8hFPOuhGECtJnH93ma9Aw1_wHxfv-eogJhKNixs0W8pUA4plzoxt9_sr38dIafOZ0tpmvBgthI6yhaKN1A','93b62f70d43172f164afe9b691b989c5_e633214c21d4431c0110b6ee7e6e7a16','2023-05-12 14:07:57','2023-05-12 14:07:57'),(9,'2023-05-15 09:27:08.068668','2023-05-19 10:00:55.972037','2023-05-17 09:59:18.041228','ROLE_USER',NULL,NULL,'1-1','2023-05-17 09:59:18.041229','1-1',5,NULL,_binary '','asng123',_binary '',NULL,'','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','2023-05-17 09:59:18.041207','https://avatars.githubusercontent.com/u/80505960?v=4','ㅋㅋ','김호정닮음','$2a$10$/7WTRG4xE.44t3/znTnXOuC8a/L9oqiXHkoiJWpvQD4r4ol7k/a6O',0,'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2ODQ4ODk4MDF9.As30OFNm8R92MqoRwUQqtItXC8Hu8At888FD1Q03Z42XAh_G-XRp8mUwRBG4JTn3O3U3Kyg7285jM6MZ6BG4-Q',NULL,'2023-05-17 09:59:18','2023-05-17 09:59:18'),(12,'2023-05-15 14:24:32.067076','2023-05-18 22:30:33.993146','2023-05-18 14:20:20.405263','ROLE_USER',NULL,'https://dodo-board.tistory.com/','3-1','2023-05-18 14:20:20.405264','1-1',0,'sellogDAAS@gmail.com',_binary '','Dohyun-Kimm',_binary '',NULL,'1-1','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','2023-05-18 14:20:20.405260','https://sellog.s3.ap-northeast-2.amazonaws.com/478fb36fa2484397a2af76e864075943.jpg','타협은 후퇴다','도현','$2a$10$n9fpnfjfwHJSXdhRRs3uw.3L1uyg4/1jE3eINmFBTYS4AOppJOjfe',92770,'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2ODQ5OTE4OTd9.yfa7lSUiYEWC9F3esXWOp_F9sEEEN6Y9PX6WZjCWwgTR0hTmO0k1YYcz4Ca-P9oZEnWtE-ZLVf-j89XMeRmkcQ',NULL,'2023-05-18 14:20:20','2023-05-18 14:20:20'),(13,'2023-05-15 17:43:41.002501','2023-05-18 11:05:48.153826','2023-05-16 14:04:45.966916','ROLE_USER',NULL,NULL,'7-1','2023-05-16 14:04:45.966918','1-1',3,NULL,_binary '\0','yung5487@naver.com',_binary '\0',NULL,'1-1',NULL,'2023-05-16 14:04:45.966877','1','실코','지용현','$2a$10$6TzJ9Llw6H5acaIZM9VrgOyYq36uBx66W9krA.wC/ZzJyoCEkjSLa',0,'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2ODQ5ODAzNDh9.AbzVurt4Cp6SiYMnFfknfFsMc8tQDBBXJVhF3QV3TQHspCI-Xd8PQhQ41_ONfHmzz9xyQ4UsT6R48KbDLXthXg','f1956d9f8a0d202af69f1c422eae0205_837085b25dbd3cd7c21923050a89ea09','2023-05-16 14:04:46','2023-05-16 14:04:46'),(15,'2023-05-16 08:59:08.114764','2023-05-16 08:59:13.854728','2023-05-16 10:58:27.990720','ROLE_USER',NULL,NULL,'7-1','2023-05-16 12:35:00.738302','1-1',0,NULL,_binary '\0','rkddmscks46@naver.com',_binary '\0',NULL,'',NULL,'2023-05-16 10:58:27.990713','1','ssafy','ssafy','$2a$10$vOurUSk5Vh4CLYh5Swt2jOKdPtpKDu.s2EGz0ak/QAj7fNHZ9Sgzu',0,'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2ODQ3OTk5NDh9.5XGEZAqsR6BOKI2iNvBOLVmuLQM9u276IknlFivTL0Rkb21V06wHzLtNXkhiD8DCUoQsHj8KX4lR3qvYP8AATw','2c07639a9dda09af46474782fc9228f7_14ccc0462ada42d94300274f480cb108','2023-05-16 10:58:28','2023-05-16 10:58:28'),(17,'2023-05-16 12:35:00.838059','2023-05-18 00:09:54.689640','2023-05-16 12:35:00.738299','ROLE_USER',NULL,NULL,'7-1','2023-05-16 12:35:00.738302','1-1',1,NULL,_binary '\0','seoda0000',_binary '\0',NULL,'1-1','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','2023-05-17 23:59:04.440414','https://avatars.githubusercontent.com/u/93422277?v=4','dd','dk','$2a$10$cf0A8AhBLfCADDy0WAEWuOyTJOy646kwVHBEPwlsSngqYHwFnV846',100020,'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2ODQ4MTI5MDB9.3Sqcj3rFgwSJhdqD5aSA4o4mfE5-GlxBV1kOWxGRh-7Brmlb-6KvMhzoFw1kl7xZCr3OupXunXeos-T291mW0g',NULL,'2023-05-16 12:35:01','2023-05-16 12:35:01'),(19,'2023-05-16 13:09:29.051575','2023-05-16 13:13:17.748226','2023-05-16 13:09:28.950994','ROLE_USER',NULL,NULL,'7-1','2023-05-16 13:09:28.950996','1-1',0,NULL,_binary '\0','re9946@naver.com',_binary '\0',NULL,'1-1',NULL,'2023-05-16 13:09:28.950988','1','김 ♥♡♥ 찬 ♥♡♥ 휘','♥♡♥찬휘♥♡♥','$2a$10$Qr5uXHRGxdL9efFHe5lDzecOYoIuy/gJSdqt4G1NT7XZsQclvKVh2',2,'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2ODQ4MTQ5Njl9.2czWHGPO1TNB4BwLen7tG69VIEHu_3EQYqetkK-9fWUW6_qpVLRtvO1JjyNFuraptk3uHjDY0X5YSAEgjYMOJQ','80ec56a878270ec6fb410b0216356ca6_d5f43c3c95218784de7bb17340da07a4','2023-05-16 13:09:29','2023-05-16 13:09:29'),(20,'2023-05-16 13:13:37.530612','2023-05-16 13:13:37.659014','2023-05-16 13:13:37.428411','ROLE_USER',NULL,NULL,'7-1','2023-05-16 13:13:37.428413','1-1',NULL,NULL,_binary '\0','PMH2906',_binary '\0',NULL,'1-1','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','2023-05-16 13:13:37.428404','https://avatars.githubusercontent.com/u/44748142?v=4',NULL,'MIHEE PARK','$2a$10$pHLYAZQoDaKlYZQV.iNFbO.tND9o8JvfQWE5AE4GX/Has7F13RxMu',0,'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2ODQ4MTUyMTd9.HNgVlmJEWPVRvCSzJt0d_jJCRp2nlcWF9i8Q2hOrXNq9jTvXXPbmhpKiEkOelWHLymfTouPjARvZDE1gZSI5hQ',NULL,'2023-05-16 13:13:37','2023-05-16 13:13:37'),(21,'2023-05-16 13:14:03.301500','2023-05-16 13:14:03.432703','2023-05-16 13:14:03.198610','ROLE_USER',NULL,NULL,'7-1','2023-05-16 13:14:03.198612','1-1',NULL,NULL,_binary '\0','mint3410@naver.com',_binary '\0',NULL,'1-1',NULL,'2023-05-16 13:14:03.198604','1',NULL,'bellejoie','$2a$10$Zy/bWFUedRDSoXMahMcEHOhPG/27pdpMA6/i2a.XGn.manhRBcQPK',0,'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2ODQ4MTUyNDN9.ZB_y0TZrkbYS_8pT8LsxDFDCS5NURR8kpwvqWpLuWggEdNqDfMGlmjX7P_Ht8_5Bd06euMZYVxx8JcE6JsZ4Fg','8c8a2761e79a03c0763efbe9fb3ba1f4_963d6b47c8874612414ae9fe1e1e9734','2023-05-16 13:14:03','2023-05-16 13:14:03'),(22,'2023-05-16 14:04:41.830295','2023-05-16 14:04:55.894509','2023-05-16 14:04:41.728188','ROLE_USER',NULL,NULL,'7-1','2023-05-16 14:04:41.728191','1-1',1,NULL,_binary '\0','pjw2369@naver.com',_binary '\0',NULL,'1-1',NULL,'2023-05-16 14:04:41.728167','1','탈퇴는 후퇴다','김호정','$2a$10$433PoluOEndwcdvTgAQw3eD2yrfXWxqd6MyquGdmO1kfLoM0P9htC',0,'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2ODQ4MTgyODF9.c2mjHwUKylKx3hMmRUawp8ExZVGxH1LWENb1FsONUcCKb0gqw9wKLBeiN5AQYnS1Ons_Wo3wZN6jZB6bLaSzCw','4225a812c7a998d459d3827ee163531a_d1f937ee970e03e3e655116bf14a0ecf','2023-05-16 14:04:42','2023-05-16 14:04:42'),(24,'2023-05-16 14:09:56.951620','2023-05-16 14:10:49.172987','2023-05-16 14:09:56.849685','ROLE_USER',NULL,'https://seolhee2750.tistory.com/','7-1','2023-05-16 14:09:56.849687','1-1',2,'2750seolhee@naver.com',_binary '\0','seolhee2750@naver.com',_binary '\0','https://github.com/seolhee2750','1-1',NULL,'2023-05-16 14:09:56.849678','1','싸피에서 제일 예뻐요.','경국지색설희','$2a$10$PcUAC0MYuJ/MT2Msh21tH.R7A1W0Rzsy2zvcAtWKZ6egac.Ref582',0,'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2ODQ4MTg1OTd9.b84PtStw0Mf2qZM7F3ryZMmw0XqEWQh_zFiixjcQuUS5_xujtFMiD-VnWP6Mp4FrKY7ZmziGgxTeSKffW0Q1VQ','ae52c9a445c8dc3d23fed95c1cd1d404_873be559dbbe0fc8e5795355c124b7be','2023-05-16 14:09:57','2023-05-16 14:09:57'),(27,'2023-05-16 15:08:05.059483','2023-05-18 15:58:37.124625','2023-05-16 15:08:04.960639','ROLE_USER',NULL,NULL,'7-1','2023-05-16 15:08:04.960642','1-1',NULL,NULL,_binary '\0','woonchoi',_binary '\0',NULL,'1-1','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','2023-05-16 15:08:04.960593','https://avatars.githubusercontent.com/u/83646178?v=4',NULL,'woonchoi','$2a$10$UBwBj7fWWu6CWbUDKq1C.e9ck4mJkp5su0w2M1DF0SDr8WfzU1Xuq',630,'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2ODQ4MjIwODV9.ITy-vkmd5mw_NIaztHIwhc2qR-GpZKVE2Q-E2r1HBa1FdvP5tE0_STzQThXXACrGu5GCN9sCuJoGE4FUxSelMg',NULL,'2023-05-16 15:08:05','2023-05-16 15:08:05'),(28,'2023-05-17 10:34:36.511597','2023-05-18 13:06:28.405015','2023-05-17 19:42:01.127254','ROLE_USER',NULL,NULL,'1-1','2023-05-17 19:42:01.127255','1-1',2,NULL,_binary '','haneejo',_binary '',NULL,'1-1','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','2023-05-17 19:42:01.127247','https://avatars.githubusercontent.com/u/104546171?v=4','귀요미(기모정애착인형)','한이','$2a$10$yNa7QBFWE1zEsNVgKaZw8eplJ.KHTJsqFqjcTQSMIBVWrSj7xW6di',5,'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2ODQ5ODc1ODh9.KNG497GLOyg9lrs57Gf5dfsY6RaGJxGwMH4Wf9mh43lRphKZ77WdWS33BJWzsjo9oFBhIzbRSOX392lugOL9qw',NULL,'2023-05-17 19:42:01','2023-05-17 19:42:01'),(29,'2023-05-17 11:02:28.998296','2023-05-17 11:02:29.119280','2023-05-17 11:02:28.898907','ROLE_USER',NULL,NULL,'7-1','2023-05-17 11:02:28.898911','1-1',NULL,NULL,_binary '','Jeeyoun-S',_binary '',NULL,'1-1','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','2023-05-17 11:02:28.898744','https://avatars.githubusercontent.com/u/109322034?v=4',NULL,'익명','$2a$10$nBW4O9ZKrK9RhtCFhyOylOlOibGLeYTU3pky5K3Yp2o2XN1M4.oSq',0,'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2ODQ4OTM3NDl9.pwDqbY6Kr5o8V9zulJ8Wx6UQva7KZ9cVVg5Rg9OJ7rg4ffs2_LUKsF8TZDcU_YxjQRpa1-9kU360Vvcdq1lkaA',NULL,'2023-05-17 11:02:29','2023-05-17 11:02:29'),(30,'2023-05-17 13:43:45.587385','2023-05-19 09:13:12.156931','2023-05-18 10:37:52.014022','ROLE_USER',NULL,'','7-1','2023-05-18 10:37:52.014024','1-1',1,'pjw2369@naver.com',_binary '','bohodays',_binary '',NULL,'1-1','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','2023-05-19 02:41:57.928430','https://sellog.s3.ap-northeast-2.amazonaws.com/b5d5d8da8e074052a836c38f09ecaef6.png','타협은 후퇴다','박중원','$2a$10$tlKDW3bq06ADsmYPyxJ5z.N1.IuP.2JuJ3dQBpfYBFlKDKGPLkY1q',980902,'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2ODQ5MDk0NzF9.OPPGIglMwS_d7DRPI_LsUCfduIVOq-RhRMXWZK-vygFYt2EWtvG1aag-aXqmt_OSTPUrocqMDlD2P7iqtXCIbw',NULL,'2023-05-18 10:37:52','2023-05-18 10:37:52'),(31,'2023-05-17 17:07:26.584947','2023-05-17 17:08:18.208407','2023-05-17 17:07:26.461221','ROLE_USER',NULL,NULL,'7-1','2023-05-17 17:07:26.461224','1-1',0,NULL,_binary '','moxnox63',_binary '',NULL,'1-1','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','2023-05-17 17:07:26.461212','https://avatars.githubusercontent.com/u/82074636?v=4','김찬휘 박중원 바보','정더미','$2a$10$YkxFRWsLyYNyFDNmHH7Pxu3pHKPEcHwFkCz1drL8C.8XsukXksYVW',0,'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2ODQ5MTU2NDZ9.bEc82C4znewmUBdnNMIlw0AfOA5VYAtnHixnSCUwKzjAP-PiP1BaEovIXYn2vtRV4kB84HNZX-S4eh4wvlQwUA',NULL,'2023-05-17 17:07:26','2023-05-17 17:07:26'),(32,'2023-05-18 09:18:24.258266','2023-05-18 09:25:54.686933','2023-05-18 09:25:54.685759','ROLE_USER',NULL,NULL,'1-1','2023-05-18 09:25:54.685761','1-1',5,'bbnt25@naver.com',_binary '','SPIDEY965',_binary '',NULL,'1-1','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','2023-05-18 09:25:54.685753','https://avatars.githubusercontent.com/u/109517726?v=4','3반 스파이','옆반스파이','$2a$10$rZpJYd5dOICKbbwXx.2MYOnhkOCyNQTOdunc6RT8QuRS/BYH4Wl/i',2,'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2ODQ5NzM5MDR9.425KSuu2k5nX4PzUIsDmGQYAe5CwPs5ZWWsZA47fyqd9MOBN2uw-LzAUzMYGy6imcSkC6O4amvON1Fb5tCxh9Q',NULL,'2023-05-18 09:25:55','2023-05-18 09:25:55'),(33,'2023-05-18 11:07:49.329006','2023-05-18 11:08:13.937441','2023-05-18 11:07:49.227078','ROLE_USER',NULL,NULL,'7-1','2023-05-18 11:07:49.227095','1-1',0,NULL,_binary '','Yong-Hyeon',_binary '',NULL,'1-1','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','2023-05-18 11:07:49.227071','https://avatars.githubusercontent.com/u/77275695?v=4','실코','지용현','$2a$10$2dWd925CF3TbZQMKzETqQ.7RAjeq4eZ9.H7IsDRmTMUBPqH1dRRcG',0,'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2ODQ5ODA0Njl9.ZYOB6vDdS4Myqc0SCo0nleLtoR9pEiXezBfXQHDODTM7IoHlid0kZZcBhGOxMa7t9JXeEa2B_ZQBhEBdKO1FpQ',NULL,'2023-05-18 11:07:49','2023-05-18 11:07:49'),(34,'2023-05-18 17:58:31.642065','2023-05-18 20:43:59.107462','2023-05-18 17:58:31.542063','ROLE_USER',NULL,NULL,'7-1','2023-05-18 17:58:31.542065','1-1',4,NULL,_binary '','juhee77',_binary '','https://github.com/juhee77','1-1','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','2023-05-18 17:58:31.542059','https://avatars.githubusercontent.com/u/51548333?v=4','룰루랄라','lahee','$2a$10$f/d8kKIcaiRpgE.cBQyOHeBNv2bAlJZJO5KbjFs4PDpY27FH5HV9y',10,'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2ODUwMDUxMTF9.7K1tUvpdcT2uyskFYAsCqwcvgNw_Rp35PNMtsGPsPEffE_clLx5ZJXSF5Mi7u1WJ8l4JAQZ16GleeSEf37z3aA',NULL,'2023-05-18 17:58:32','2023-05-18 17:58:32'),(44,'2023-05-19 09:44:22.316860','2023-05-19 09:59:13.583855','2023-05-19 09:44:22.217656','ROLE_USER',NULL,NULL,'7-1','2023-05-19 09:44:22.217659','1-1',2,NULL,_binary '','dlwltn0350',_binary '',NULL,'1-1','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','2023-05-19 09:44:22.217646','https://avatars.githubusercontent.com/u/56522878?v=4','g화이팅!','sellog','$2a$10$7YfIKZqY8F1ll2MTyt.iNOVHoURS32ncc6Om90i5PHHB97CwAfg4m',17,'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2ODUwNjE4NjJ9.pnuDs1KNq13K8aW5j3U1LvgVdUbPPvMK-x8BoigEjUL9a8quaBl3dSqf83x8Qnu1-pqQES6JkmB9cBvX06oTqg',NULL,'2023-05-19 09:44:22','2023-05-19 09:44:22');
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-19 10:23:47