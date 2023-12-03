# FinalFantasyV PF-KB romhack changelog notes

initial romhack is PixelFreemaster KickButz
(3 slots for all jobs + all jobs unlocked at Wind Crystal + superior UX)[https://archive.org/details/final-fantasy-v-pixel-freemaster-v2.0]


## Changes Made
+ renamed Asht to Ash

+ added 🔷 before all 30 BLU spells in battle menu
+ changed 🔷 to \whip for these weapons
    Morning Star
    Flail
+ changed 🔷 to \xF5 for these
    Moonring
    Ash
+ changed 🔷 to \dagger for these weapons
    TwinLance

+ BloodSword
    changed Bonus from +5 to +1
    added Double Grip
    changed stats to Vitality from Magic Power

+ Twin Lance
    renamed to Balisong (esp since Monk can equip)

## Work To Do
adjust 30 BLU spells' names in status menu

### magic

no character limit in battle, long name
6 -1 chars in status menu

🔷Doom
🔷Roulette
🔷AqBrth
🔷L5Dth
🔷L4Grvg
🔷L2Old
🔷L3Flre
🔷ToadSng
Pond’sChorus
🔷MiniSng
LiliputianLyric
🔷Flash
🔷TimeSlip
TimeSlip
🔷BersSng
MoonFlute
🔷DethClaw
DeathClaw
🔷Aero
🔷Aera
🔷Aeroga
🔷FlmThrow
FlameThrow
🔷GobPunch
GobPunch
🔷DarkSpk
DarkSpark
🔷OffGrd
OffGuard
🔷PepUp
Transfusion
🔷MindBlast
MindBlast
🔷Vampr
Vampire
🔷MPHalf
MagHammer
🔷MtyGuard
MtyGuard
🔷SelfKill
SlfDestruct
🔷Revenge
???
🔷1000Ndles
1000Needles
🔷WhiteWind
WhiteWind
🔷Missle
Missle

add level 1 thru 3 spells to Galuf’s World magic stores
also doubling the magic sold in these stores
they all sell level 4, it’s repetitive and unrealistic
1&3 Regole
2&4 Bal
2&3 Quelb
4&5 Moore


### jobs
Remove these from ABP progression:
(take of out tech tree, can’t dummy-out of Job System)
+ Ability
+ Passages (hidden passages, THF 3)
+ Sprint (not available, perma-run always on, tho)
    can add this as level 1 if re-enable the ability!
+ Learning
    currently at BLU 1, for only 1 ABP
    shld be removed entirely bc always passive for every job
+ FindTraps / FindPits
    it’s also always on

### weapons
make Blood Sword more accurate, x0.25 damage to offset
make Hammers and Axes separate weapon categories
Hammers for WHM, other mages
AXE for Ranger, others
no edged weapons for most mages

add debuffs on all Bells, high chance of hit

give GEO light swords, too

### armor
nerf
    WHM armor, it’s too good
boost
    Bard armor
    GEO armor
give more classes Shields
    all but whom?

make MP gain teal
    fix color of text in this heal effect, shld affect everything if done at a root level

### items

rm Asht item
    weapon no one can use
    replace w?





### dialog edits
+ change 2+ Bartz dialog references from “Christmas” to “Chocobo”
+ what other lines can be brought back into FF from pop culture?
+ change Galuf dialog from “nancy-boy” to “pink puff”
+ change Galuf dialog from “such assets” upon Faris reveal to “such a fine lass”
+ fix any other untasteful lines

ExDeath
change name in script to have 2nd capital letter
give him as many wood, tree, vine, plant, jungle puns as possible
foreshadows the He’s a Tree plot twist

### longview job system fixes
2nd menu for passives, like in Void Divergence

change 2nd occurrence of !Ability to actual 1st 

### jobs I’d like to modify / add 
remove all Equip passives:
Sword, Armor, Shields, Harps, Rods, Spears
more flexible weapon & armor equippage for all jobs
frees up 5+ slots for
+ Provoke
+ Backstab
+ NinMagic
+ ????
+ ????
+ ????

all jobs can Dbl.Wield? or too broken?

most jobs can use light Shield

*Knight*
perhaps rename to Warrior
add Provoke (Enrage), attempts to draw aggro from all mobs
DualWield
damage not 2x but 3x on the weapon (bc passive Dbl.Wield for all)
maybe gets !RapidFire this might be too much tho

*Samurai*
rm !CoinToss
add ????
bc !BladeSlap also gives dmg, maybe a similar move to Confuse vs Stun

*Mime -> Gambler*
add !CoinToss
Mime -> Copycat
merely brand change
make it look less like Mime
make clothes darker
add Setzer type design
long sleeve coat from cape!
reuse BLU sprite components for Gambler?

*Thief*
rm Agility
add BackStab
4x damage when mob is reversed away from party
Confuse, Flirt, Control

*Ninja*
Agility as lvl ?

rm Dbl.Wield? IF all jobs can now Dbl.Wield
Shields are more powerful
    can block elements from start of game
    increased Evasion, from start of game

*combine Beastmaster and Ranger*
!Animals -> lvl 2
!Calm stays lvl 1 but stronger
will always Flirt/Stun (miss 1 - 3 turns)
can also proc Sleep
sets “immune to Provoke status”
!Capture lvl 3
rm !RapidFire
give to ????
Geomancer is a good candidate
cld create a HighMonk vs HolyMonk
cld go to Knight / Warrior, as ultimate

*Ranger -> Hunter*
more weapons
can set reactive Traps in battle?

*Bard*
change !Sing skills to be only 1 cast
add 4 more !Sing
make !BardSong for continuous cast (stronger ofc)
HasteSong
faster Regen
Bless
add immunity BardSongs
add Absorb BSongs
all Songs require 1 - 8 MP
Dancer
changes to !Dance; 3 not 4 options
???
very small, full party HP heal instead of SwordDance
Jitterbug
same (small HP drain of random mob)
??? Watz
same (small MP drain of random mob)
make !Dance2
SwordDance
4x dmg on random mob
???
tries to Stun all enemies
???
small full party HP heal, removes Blind & Stun from party
make !Dance3
SquareDance
small, full party MP heal
???
4 normal attacks on enemies (like Cyan’s 4th Bushido)
???
small full party HP heal, removes Poison & Sap from party
Change BLU to Scholar
Harps / Bells / Rods / Staves / Shields
custom Scholar sprite
based on WHM
w/o hood
all w ponytails, like scholar NPCs
no masks
gain new passive
damage taken becomes MP (10%) ?
!Bless ?
like an MP recovery !Sing
most restrictive weapons slots
still Dbl.Wield
can reuse BLU sprite components for Gambler?
Geomancer
maybe give some terrain abilities to NinMagic?
needs an extra ability or 2 bc DetectTraps always passive, all jobs


## Character Key
Berser ker
Beast m ast er
\xB1    
\xB2    
\xB3    Be
\xB4    rs
\xB9    
\xBA    as
\xBB    
\xD1    anc
\xD4    rd
\xD5    
\xDB    zz
\xDE    ar
\xDF    ra
\xDC    
\xDD    
\xDA    
\xD9    
\xD6    
\xD7        
\xD8    
\xD9


