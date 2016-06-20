# mofolondon-ether
etherpad stats stuff for mofo london


### ideas for stats

* number of links/urls
* number of "+1"
* number of edits
* number of words
* search issues:
	* web literacy
	* decentralization
	* open innovation
	* digital inclusion
	* online privacy + security 

### requirements

* [x] get text data from all etherpads at `#mozlondon` (in `data.csv`)
* [x] separate all empty etherpads (in `duds.csv`)
* [x] add etherpad text data to `pads/` directory (1 etherpad = 1 .txt file)
* [ ] write a script to go over all etherpads and pull out stats from the **ideas** section above
* [ ] update stats below in summary


### stats

*updated as learned* 

* 120 etherpads/sessions
* 20 etherpads with content


### process options

#### 1
This tool : https://github.com/betatim/etherbrain lets you get a .md file for an etherpad, and then maybe the wget command would work, thanks @betatim!

so, now I guess. we would:
1. get a list of etherpads in a .txt file/csv
2. write something to run over that file, get all of the .md versions of the files running it against : http://etherbrain.herokuapp.com/moz/NAMEOFETHERPAD
3. run the wget command that does size count

which would be like:
1. https://public.etherpad-mozilla.org/p/mofo-communities/
2. http://etherpad-archive.github.io/moz/moz-communities.md
3. wget ‐‐spider ‐‐server-response http://etherpad-archive.github.io/moz/mofo-communities.md
This gives you: Downloaded: 1 files, 10K in 0.01s (762 KB/s)
Length: 10466 (10K)

#### 2

Maybe we can append `/export/txt` to each pad and download the txt files and then just write a quick stats script.

We'll probably do this one.

Most etherpads are empty and pads seem to have a character limitation on the url (so long pad names don't render)


