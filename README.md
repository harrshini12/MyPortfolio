# MyPortfolio

### Click the link to view my portfolio: (https://harrshini-portfolio.herokuapp.com/)

### This page gives an overview of the database structure used in this project.

***

# Addons:
Table name: addons
Primary Key: name

![addons](https://user-images.githubusercontent.com/72803388/118956377-d4505c00-b95f-11eb-8f50-8613847500d3.jpg)

***

# ChangeLog:
Table name: changelog
Primary Key: id

![changelog](https://user-images.githubusercontent.com/72803388/118956427-e29e7800-b95f-11eb-97bc-ec737271ed09.jpg)

***

# Campuses:
Table name: campuses
Primary Key: id

![campuses](https://user-images.githubusercontent.com/72803388/118956482-ee8a3a00-b95f-11eb-80a6-6c46ef05551f.jpg)

***

# CampusAddons:
Table name: campus_addons
Primary Key: id
Foreign Key: campus_id, addon_name

![campus_addons](https://user-images.githubusercontent.com/72803388/118956556-ffd34680-b95f-11eb-80e6-2d2fd51490a4.jpg)

***

# Areas:
Table name: areas
Primary Key: id
Foreign Key: campus_id

![areas](https://user-images.githubusercontent.com/72803388/118956594-082b8180-b960-11eb-942f-ccdcc081ef6b.jpg)

***

# Rooms:
Table name: rooms
Primary Key: id
Foreign Key: area_id

![rooms](https://user-images.githubusercontent.com/72803388/118956656-17aaca80-b960-11eb-86cc-eaa634c90f12.jpg)

***

# Invitation:
Table name: invitation
Primary Key: id
Foreign Key: area_id

![invitation](https://user-images.githubusercontent.com/72803388/118956731-285b4080-b960-11eb-80d9-3696b0ed41b2.jpg)

