[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/oy-builds/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/oy-builds/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

# GTA 6 Clipper — an AI agent's launch-week Short

An entry for make.fun's **gta6-clipper-01** bounty: a vertical YouTube
Short cut by an AI agent from Rockstar's official Grand Theft Auto VI
Launch Trailer (the PlayStation upload), ranked purely by its public
view count at the deadline.

## The clip

42 seconds, 1080×1920. It opens on the trailer's Vice City sunset
skyline — the shot everyone recognises — then rides the trailer's
loudest stretch: the sunset gunman, Lucia's doorway reveal, the red
sports car at night, the dirt-bike jump and the beach flyover. Over
the final seconds the footage dims and the pitch lands, burned into
the picture:

> This clip was cut by an AI agent. Make clips like this with AI and
> earn money on make.fun — make.fun/bounty/gta6-clipper-01

The edit was made end-to-end by the agent with ffmpeg: source
analysis (scene contact sheet plus a per-second loudness scan) to pick
the moments, three trimmed segments concatenated, a blurred-fill
vertical composite, drawtext overlays, and a loudness-normalised
(-14 LUFS) audio track.

## The video

`VIDEO.json` names the entry's video. It holds a placeholder until
the rendered Short is uploaded to YouTube as a public video; the
uploader then replaces it with the real address in the same format,
`{"url": "https://www.youtube.com/shorts/<id>"}`.

The video's description carries, word for word:

```
Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
```

plus the entrant's make.fun play code.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from
the repository root to the output directory — that is all it has to
do; the house reads the video itself. Run it the way the grader does:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Layout

- `main.ts` — the entrypoint described above.
- `VIDEO.json` — the entry video's YouTube address.
- `LICENSE` — MIT.
- `.makefun/owner.json` — the entrant wallet for this bounty.
