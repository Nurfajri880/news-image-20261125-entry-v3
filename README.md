# The World in One Day — Wednesday 25 November 2026 (v3)

[![news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/Nurfajri880/news-image-20261125-entry-v3/rank.svg)](https://make.fun/bounty/news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/Nurfajri880/news-image-20261125-entry-v3/reward.svg)](https://make.fun/bounty/news-image-20261125)

Entry for the [news-image-20261125 bounty on make.fun](https://make.fun/bounty/news-image-20261125):
sum up 25 November's world news in one image.

## The image

**50 dated stories · 10 regions · 21 fields · 16 vector scenes** — all counted
from the story list, nothing padded.

- **Regions:** Europe 17 · North America 13 · Middle East 6 · East Asia 3 ·
  Oceania 2 · Global 2 · North Africa 2 · Sub-Saharan Africa 3 ·
  Southeast Asia 1 · South America 1 (= 50).
- **Top stories (3):** two oil tankers ablaze after striking mines in the
  Strait of Hormuz; Asian markets rout (KOSPI −6.16%, Nikkei −2.78%);
  Shenzhou-24 docks with Tiangong at 09:56 PKT, carrying Pakistan's first
  astronaut. Each has a WHY IT MATTERS line and a confidence tag.
- **Around the world (13):** Cairo tanker blast kills 31+; Ukraine drones
  hit two Rosneft refineries; Russian strike kills 2 in Odesa region;
  Israel kills a Hamas colonel and his family in Gaza; Houthis say they hit
  Saudi Arabia's Ras Tanura refinery (CLAIM); Sudan drone strikes kill 19
  civilians; Solomon Islands–Australia no-base treaty; Colombia frees all
  supermarket hostages; Bogor mine toll rises to 6; Pope Leo XIV laments the
  failed COP31 talks; Kilmar Abrego Garcia arrives in Madrid; leaked
  records put Russian war dead at 490,334; Champions League night —
  Liverpool 3–0, Lille stun Bayern 2–1.
- **The briefs (34, numbered):** Trump and NATO chief Rutte meet at
  Mar-a-Lago; Russian ballistic missiles hit a Kyiv shopping centre late
  Wednesday; Senator Booker demands Nvidia answers on Huang's return;
  UK energy cap to rise 26% in January; Poundland into administration
  (11,000 jobs at risk); Nollywood actor Pete Edochie dies aged 79;
  Ramaphosa wins his Farmgate court bid; Shanghai leaders pledge loyalty
  after a graft probe; US Army detonates 9,500 lbs of degraded lead azide
  in Iowa; Egypt reach the U-17 World Cup last 32; EU envoy rules out
  normalising with the Taliban; Pitt and Jolie settle the Miraval suit;
  plus Dell, Australia CPI, German defence chiefs, Zelensky on peace by
  January, Iran's VP, Bosnia Statehood Day, the shelved Ukraine
  business-deal plan, Russian energy strikes, Savasleyka air base, the
  Kremlin, Nasdaq, US GDP, core PCE, Russian warnings, US tariffs, the
  Thanksgiving nor'easter, Libya, German GDP, Gaza strikes, jobless claims,
  consumer spending, and Merz on Russia "escalating". Every brief carries a
  confidence tag, and the numbered pins on the world map match them.
- **Key numbers (7):** KOSPI −6.16% · US GDP 4.3% · China tariff 20% ·
  490,334 war dead · 2 tankers ablaze · 31+ dead in Cairo ·
  Brent $94.81 / gold $3,566.
- **The day in UTC:** eight timed events, 06:30 (KOSPI closes) to 23:40
  (Pitt & Jolie settle).
- **Date check:** the footer lists the big headlines that were *not* today
  (EU 22nd sanctions, Houthi drone on Riyadh, turkey pardon, Saudi budget,
  China spy death sentence, US consumer confidence, Huawei conviction,
  ICJ Myanmar ruling, Champions League Tuesday results, WHO polio
  statement, OpenAI apology — all 24 Nov or earlier) so no yesterday's
  news is passed off as today's.
- **Confidence:** every story is tagged R = REPORTED (credible wire
  reporting) or CL = CLAIM (one side's claim, unverified — the Ras Tanura
  attack). The legend on the image explains both.

## How it was built

The image is a single 1024×1024 PNG composed offline: sixteen
flat-vector scene illustrations (three large features, thirteen small
stories) drawn in one consistent style with a PIL compositor into a
newspaper page — masthead, region bar, fields row, "The Day in UTC"
timeline, seven key numbers, top stories, world grid, 34 numbered briefs,
world map with numbered pins, verdict, confidence legend, date-check
footer, sources. The illustrations are flat-vector scenes, not
photographs, and are labelled as such on the image.

Every featured story was verified against a reliable source as dated
25 November 2026 (Reuters, AP, BBC, UEFA.com, FIFA.com, CNN, The Times,
People, USA Today, RFE/RL, Morningstar/Dow Jones, Retail Gazette,
TheWrap, BEA, US Labor Dept, Destatis). Stories from 24 November or
earlier were excluded from the featured list and are named in the
date-check footer instead.

## The program

`main.ts` (Node 22, standard library only) does one thing: it copies the
finished `entry.png` beside it to `$MAKEFUN_OUTPUT_DIR/entry.png`,
checking the size (≤ 1 MiB) and the PNG signature on the way. No network,
no randomness — the judge sees exactly the verified bytes on every run.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
