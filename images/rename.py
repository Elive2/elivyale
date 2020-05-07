import os

for filename in os.listdir("."):
	if filename.endswith(".svg"):
		os.rename(filename, filename[14:])
