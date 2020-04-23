-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  jeu. 23 avr. 2020 à 13:08
-- Version du serveur :  5.7.26
-- Version de PHP :  7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `twitter`
--

-- --------------------------------------------------------

--
-- Structure de la table `tw`
--

DROP TABLE IF EXISTS `tw`;
CREATE TABLE IF NOT EXISTS `tw` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message` text NOT NULL,
  `id_user` int(11) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `tw`
--

INSERT INTO `tw` (`id`, `message`, `id_user`, `create_at`, `update_at`) VALUES
(1, 'Bonjour voici mon premier twitter', 3, '2020-04-20 09:45:06', '2020-04-20 09:45:06'),
(2, 'coucou voici mon second message', 3, '2020-04-20 11:53:29', '2020-04-20 11:53:29'),
(3, 'coucou voici mon troisieme message\n', 3, '2020-04-20 12:27:27', '2020-04-20 12:27:27'),
(6, 'coucou', 3, '2020-04-21 12:00:35', '2020-04-21 12:00:35'),
(7, 'quatrieme message', 3, '2020-04-21 12:01:35', '2020-04-21 12:01:35'),
(8, 'cinquieme', 3, '2020-04-21 12:01:59', '2020-04-21 12:01:59'),
(9, 'sixieme', 3, '2020-04-21 12:10:30', '2020-04-21 12:10:30'),
(10, 'Bonjour', 3, '2020-04-22 07:24:49', '2020-04-22 07:24:49');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `pwd` varchar(255) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `pwd`, `create_at`, `update_at`) VALUES
(3, 'almartin86@yahoo.fr', '1234', '2020-04-20 07:48:10', '2020-04-20 07:48:10');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `tw`
--
ALTER TABLE `tw`
  ADD CONSTRAINT `tw_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
