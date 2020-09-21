

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";



--
-- Database: `ToDo`
--

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--
Create Database `ToDo`;
use `ToDo`;
CREATE TABLE IF NOT EXISTS `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(500) NOT NULL,
  `complete` tinyint(1) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `description`, `complete`, `created`) VALUES
(2, 'walk dog', 0, '2013-03-20 19:08:42'),
(3, 'test', 0, '2013-03-20 19:14:40');


