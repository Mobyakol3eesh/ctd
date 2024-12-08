import yt_dlp
from youtubesearchpython import VideosSearch
import subprocess
import os
SAVE_PATH = "./downloaded-videos"



def search_video(video_name):
    try:
        videosSearch = VideosSearch(video_name, limit = 1)
        return videosSearch.result().get('result')[0]
    except:
        raise Exception("Error while searching for the video")
def download_video(link):
    try:
        ydl_opts = {
        'format': 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]',
        'outtmpl': f'{SAVE_PATH}/%(title)s.%(ext)s',
    }
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([link])
    except:
        raise Exception("Error while downloading the video")


def main():
    while(True):
        res = input("Do you want to Download a video or Show Downloaded Videos ?\n 1: Download\n 2: Show Downloaded Videos\n 3: Exit\n ")
        if res == '3':
            break
        elif res == '2':
            files = os.listdir(SAVE_PATH)
            print("Downloaded Videos:")
            for index,file in enumerate(files):
                print(f"{index + 1}"+"- "+file)
        elif res == '1':
            video_name = input("Enter the name of the video you want to download: ")
            video_query = search_video(video_name)
            print(video_query.get('link'))
            download_video(video_query.get('link'))
        
    
main()
  
