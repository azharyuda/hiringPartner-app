-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 21, 2019 at 12:30 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_hiringapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `engineer_data`
--

CREATE TABLE `engineer_data` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `location` text NOT NULL,
  `date_of_birth` date NOT NULL,
  `showcase_id` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `engineer_data`
--

INSERT INTO `engineer_data` (`id`, `name`, `description`, `location`, `date_of_birth`, `showcase_id`, `created_at`, `updated_at`) VALUES
(1, 'Azhar Yuda Partama', 'Seorang anak', 'Samarinda', '2019-11-19', 'a', '2019-11-19 08:23:26', '2019-11-19 08:23:26'),
(2, 'Abdul', 'Saya seorang pekerja yang', 'Samarinda', '1996-04-19', '2', '2019-11-21 04:55:07', '2019-11-21 04:55:07'),
(3, 'Rusli', 'Pekerja', 'Samarinda', '1996-04-19', 'github.com/azharyuda', '2019-11-21 11:20:29', '2019-11-21 11:20:29');

-- --------------------------------------------------------

--
-- Table structure for table `hiringpartner_data`
--

CREATE TABLE `hiringpartner_data` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `location` text,
  `description` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hiringpartner_data`
--

INSERT INTO `hiringpartner_data` (`id`, `name`, `logo`, `location`, `description`) VALUES
(3, 'DEmy', 'Arka.jpg', 'Tebet', 'Perusahaan'),
(4, 'PT maju jaya', 'maju.jpeg', 'Jakarta', 'Perusahaan'),
(5, 'PT. PLN', 'pln.jpg', 'Samarinda', 'Listrik'),
(6, 'PT. PLN', 'pln.jpg', 'Samarinda', 'Perusahaan listrik');

-- --------------------------------------------------------

--
-- Table structure for table `showcase_detail`
--

CREATE TABLE `showcase_detail` (
  `id` int(11) NOT NULL,
  `showcase_id` int(11) NOT NULL,
  `engineer_id` int(11) NOT NULL,
  `showcase` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `skill`
--

CREATE TABLE `skill` (
  `id` int(11) NOT NULL,
  `skill_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `skill`
--

INSERT INTO `skill` (`id`, `skill_name`) VALUES
(1, 'PHP'),
(4, 'JavaScript'),
(5, 'HTML'),
(6, 'CSS'),
(7, 'ExpressJS');

-- --------------------------------------------------------

--
-- Table structure for table `skill_detail`
--

CREATE TABLE `skill_detail` (
  `skill_id` int(11) NOT NULL,
  `engineer_id` int(11) NOT NULL,
  `skill_level` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `skill_detail`
--

INSERT INTO `skill_detail` (`skill_id`, `engineer_id`, `skill_level`, `created_at`, `updated_at`) VALUES
(4, 1, 50, '2019-11-21 01:40:19', '2019-11-21 01:40:19'),
(5, 1, 50, '2019-11-21 01:40:25', '2019-11-21 01:40:25'),
(2, 1, 0, '2019-11-21 01:40:27', '2019-11-21 01:42:38'),
(1, 1, 50, '2019-11-21 01:40:32', '2019-11-21 01:40:32'),
(6, 1, 100, '2019-11-21 03:17:39', '2019-11-21 03:17:39'),
(7, 2, 84, '2019-11-21 04:56:47', '2019-11-21 04:56:47');

-- --------------------------------------------------------

--
-- Table structure for table `tbluser`
--

CREATE TABLE `tbluser` (
  `id` int(11) NOT NULL,
  `uname` varchar(50) NOT NULL,
  `passw` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `user_type` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbluser`
--

INSERT INTO `tbluser` (`id`, `uname`, `passw`, `email`, `user_type`, `created_at`, `updated_at`) VALUES
(1, 'yuda', '$2a$10$krZjEP/tNl8yagBEaGFpA.eW4iyk8aR/zBQm8V7fnsWlix2LosZ0C', 'superman@gmail.com', 'Engineer', '2019-11-20 08:08:12', '2019-11-20 08:08:12'),
(2, 'arka', '$2a$10$hmvE2gVe60.Xgr/.z5J/DOJqa.jJJUPyQf8XOSCzkns5AlJ5wLdTm', 'hehe@gmail.com', 'Hiring Partner', '2019-11-20 07:58:15', '2019-11-20 07:58:15'),
(4, 'demy', '$2a$10$GEl7aVEEi0E4NK4Hyi2GCO4CLgLmSiilYyhRHnQfziige0GWlZgdK', 'hehe@gmail.com', 'Admin', '2019-11-20 09:17:51', '2019-11-20 09:17:51'),
(10, 'tes', '$2a$10$KJ.GXWWEfAEUNQqlVVRi5OR8U0KBse7trpJ94PbPg9jx76UlBVZP6', 'hehe@gmail.com', 'Admin', '2019-11-20 18:40:33', '2019-11-20 18:40:33'),
(11, 'azharyuda', '$2a$10$lWnlVwbMj9HJ4UyGK1JuBumd.wxW39TUcM8XwAb899cgU94ADkKx6', 'gipsy@gmail.com', 'Engineer', '2019-11-21 11:17:23', '2019-11-21 11:17:23');

-- --------------------------------------------------------

--
-- Stand-in structure for view `view_engineer`
-- (See below for the actual view)
--
CREATE TABLE `view_engineer` (
`id` int(11)
,`name` varchar(255)
,`description` text
,`location` text
,`date_of_birth` date
,`showcase_id` varchar(255)
,`skill_level` int(11)
,`skill_name` varchar(255)
,`created_at` timestamp
,`updated_at` timestamp
);

-- --------------------------------------------------------

--
-- Structure for view `view_engineer`
--
DROP TABLE IF EXISTS `view_engineer`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_engineer`  AS  select `engineer_data`.`id` AS `id`,`engineer_data`.`name` AS `name`,`engineer_data`.`description` AS `description`,`engineer_data`.`location` AS `location`,`engineer_data`.`date_of_birth` AS `date_of_birth`,`engineer_data`.`showcase_id` AS `showcase_id`,`skill_detail`.`skill_level` AS `skill_level`,`skill`.`skill_name` AS `skill_name`,`skill_detail`.`created_at` AS `created_at`,`skill_detail`.`updated_at` AS `updated_at` from ((`engineer_data` join `skill_detail` on((`engineer_data`.`id` = `skill_detail`.`engineer_id`))) join `skill` on((`skill_detail`.`skill_id` = `skill`.`id`))) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `engineer_data`
--
ALTER TABLE `engineer_data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hiringpartner_data`
--
ALTER TABLE `hiringpartner_data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `skill`
--
ALTER TABLE `skill`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbluser`
--
ALTER TABLE `tbluser`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `engineer_data`
--
ALTER TABLE `engineer_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `hiringpartner_data`
--
ALTER TABLE `hiringpartner_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `skill`
--
ALTER TABLE `skill`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbluser`
--
ALTER TABLE `tbluser`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
