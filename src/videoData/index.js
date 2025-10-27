/** @format */

import {
  MusicThumbnail,
  Music,
  AutocorrectVid,
  AutocorrectThumbnail,
  Analogsentimentalism,
  AnalogsentimentalismThumbnail,
} from "../images"

export const musicVideoData = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Music and the Visual Arts",
  description: "Video shows me doing karaoke to a song that I made.",
  thumbnailUrl: MusicThumbnail,
  contentUrl: Music,
  uploadDate: "2023-07-12T04:18:00Z",
  duration: "PT0M20S",
}

export const autocorrectVideoData = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Ducking Autocorrect.",
  description:
    "Video is a sample interaction with an autocorrect program I made.",
  thumbnailUrl: AutocorrectThumbnail,
  contentUrl: AutocorrectVid,
  uploadDate: "2023-07-12T04:18:00Z",
  duration: "PT0M15S",
}

export const analogsentimentalismVideoData = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "videoBackground",
  description:
    "Video is an animation that I made based off the album 'To See the Next Part of the Dream' by Parannoul.",
  thumbnailUrl: AnalogsentimentalismThumbnail,
  contentUrl: Analogsentimentalism,
  uploadDate: "2023-07-12T04:18:00Z",
  duration: "PT0M6S",
}
