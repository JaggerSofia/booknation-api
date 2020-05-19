BEGIN;

TRUNCATE
  booknation_reviews,
  booknation_books
  -- booknation_users
  RESTART IDENTITY CASCADE;

-- INSERT INTO booknation_users (user_name, full_name, nickname, password)
-- VALUES
--   ('dunder', 'Dunder Mifflin', null, '$2a$12$XDX3Kp6DyFwX.LNLrSPrjelYwC/YQNkG7TEHS01h7hYr2DT.AJY2m'),
--   ('b.deboop', 'Bodeep Deboop', 'Bo', '$2a$12$lveEIJ2eddiT.0S9Ral4AesL/47WVZ0r4KtUKkQPgOcJ2SwOFB/CW'),
--   ('c.bloggs', 'Charlie Bloggs', 'Charlie', '$2a$12$BGXlSJEr4Gle2dbFz9Tmg.bHPqMelisxrN0i.hXyyitSUFuDOAsnm'),
--   ('s.smith', 'Sam Smith', 'Sam', '$2a$12$GhYHEvNILSR5STahE35ebO/lJZw3P.OBGeDsmDUEitpL4B4WwVC4.'),
--   ('lexlor', 'Alex Taylor', 'Lex', '$2a$12$mGvgMii0KQCZm4MOy8scj./O.W2vMl6Xwax/TnZzvzEdciIlHjW8W'),
--   ('wippy', 'Ping Won In', 'Ping', '$2a$12$79Pjv2VAGc3jHcmu9QPrfeVuF.PtXOIbnPNLCULAZVeqQW/TbXusy');

INSERT INTO booknation_books (title, image, /*user_id, */content)
VALUES
    ('Apeirogon: A Novel', 'https://images-na.ssl-images-amazon.com/images/I/41mfIBjRlVL._SX329_BO1,204,203,200_.jpg', /*1, */'Bassam Aramin is Palestinian. Rami Elhanan is Israeli. They inhabit a world of conflict that colors every aspect of their lives, from the roads they are allowed to drive on to the schools their children attend to the checkpoints, both physical and emotional, they must negotiate.
 
But their lives, however circumscribed, are upended one after the other: first, Rami’s thirteen-year-old daughter, Smadar, becomes the victim of suicide bombers; a decade later, Bassam’s ten-year-old daughter, Abir, is killed by a rubber bullet. Rami and Bassam had been raised to hate one another. And yet, when they learn of each other’s stories, they recognize the loss that connects them. Together they attempt to use their grief as a weapon for peace—and with their one small act, start to permeate what has for generations seemed an impermeable conflict.
 
This extraordinary novel is the fruit of a seed planted when the novelist Colum McCann met the real Bassam and Rami on a trip with the non-profit organization Narrative 4. McCann was moved by their willingness to share their stories with the world, by their hope that if they could see themselves in one another, perhaps others could too.
 
With their blessing, and unprecedented access to their families, lives, and personal recollections, McCann began to craft Apeirogon, which uses their real-life stories to begin another—one that crosses centuries and continents, stitching together time, art, history, nature, and politics in a tale both heartbreaking and hopeful. The result is an ambitious novel, crafted out of a universe of fictional and nonfictional material, with these fathers’ moving story at its heart.'),
    ('Saint X', 'https://images-na.ssl-images-amazon.com/images/I/51Ys5yejqML._SX327_BO1,204,203,200_.jpg', /*2, */'Claire is only seven years old when her college-age sister, Alison, disappears on the last night of their family vacation at a resort on the Caribbean island of Saint X. Several days later, Alison’s body is found in a remote spot on a nearby cay, and two local men–employees at the resort–are arrested. But the evidence is slim, the timeline against it, and the men are soon released. The story turns into national tabloid news, a lurid mystery that will go unsolved. For Claire and her parents, there is only the return home to broken lives.

Years later, Claire is living and working in New York City when a brief but fateful encounter brings her together with Clive Richardson, one of the men originally suspected of murdering her sister. It is a moment that sets Claire on an obsessive pursuit of the truth–not only to find out what happened the night of Alison’s death but also to answer the elusive question: Who exactly was her sister? At seven, Claire had been barely old enough to know her: a beautiful, changeable, provocative girl of eighteen at a turbulent moment of identity formation.

As Claire doggedly shadows Clive, hoping to gain his trust, waiting for the slip that will reveal the truth, an unlikely attachment develops between them, two people whose lives were forever marked by the same tragedy.

For readers of Emma Cline’s The Girls and Lauren Groff’s Fates and Furies, Saint X is a flawlessly drawn and deeply moving story that culminates in an emotionally powerful ending.'),
    ('The Girl with the Louding Voice: A Novel', 'https://images-na.ssl-images-amazon.com/images/I/51JsEHiahQL._SX329_BO1,204,203,200_.jpg', /*3, */'Adunni is a fourteen-year-old Nigerian girl who knows what she wants: an education. This, her mother has told her, is the only way to get a “louding voice”—the ability to speak for herself and decide her own future. But instead, Adunni''s father sells her to be the third wife of a local man who is eager for her to bear him a son and heir.

When Adunni runs away to the city, hoping to make a better life, she finds that the only other option before her is servitude to a wealthy family. As a yielding daughter, a subservient wife, and a powerless slave, Adunni is told, by words and deeds, that she is nothing.

But while misfortunes might muffle her voice for a time, they cannot mute it. And when she realizes that she must stand up not only for herself, but for other girls, for the ones who came before her and were lost, and for the next girls, who will inevitably follow; she finds the resolve to speak, however she can—in a whisper, in song, in broken English—until she is heard.'),
    ('Oona Out of Order: A Novel', 'https://images-na.ssl-images-amazon.com/images/I/41xiG5TiW7L._SX326_BO1,204,203,200_.jpg', /*4, */'It’s New Year’s Eve 1982, and Oona Lockhart has her whole life before her. At the stroke of midnight she will turn nineteen, and the year ahead promises to be one of consequence. Should she go to London to study economics, or remain at home in Brooklyn to pursue her passion for music and be with her boyfriend? As the countdown to the New Year begins, Oona faints and awakens thirty-two years in the future in her fifty-one-year-old body. Greeted by a friendly stranger in a beautiful house she’s told is her own, Oona learns that with each passing year she will leap to another age at random. And so begins Oona Out of Order...

Hopping through decades, pop culture fads, and much-needed stock tips, Oona is still a young woman on the inside but ever changing on the outside. Who will she be next year? Philanthropist? Club Kid? World traveler? Wife to a man she’s never met? Surprising, magical, and heart-wrenching, Margarita Montimore has crafted an unforgettable story about the burdens of time, the endurance of love, and the power of family.'),
    ('Eden Mine: A Novel', 'https://images-na.ssl-images-amazon.com/images/I/51Tnr8GW-jL._SX325_BO1,204,203,200_.jpg', /*5, */'For generations, the Fabers have lived near Eden Mine, scraping by to keep ahold of their family''s piece of Montana. Jo and her brother, Samuel, will be the last. Despite a long battle, their property has been seized by the state through eminent domain?something Samuel deems a government theft.

As Jo packs, she hears news of a bombing. Samuel went off to find work in Wyoming that morning, but soon enough, its clear that he''s not gone but missing, last seen by a security camera near the district courthouse?now a crime scene?in Elk Fork. And the nine-year-old daughter of a pastor at a nearby church lies in critical condition.

-- Can the person Jo loves and trusts most have done this terrible thing? Can she have missed the signs? The last time their family met violence, Jo lost her ability to walk. Samuel took care of her, outfitted their barn with special rigging so she could still ride their mule. What secrets has he been keeping? As Jo watches the pastor fight for his daughter, watches the authorities hunt down a criminal, she wrestles with an impossible choice: Must she tell them where Samuel might be? Must she choose between loyalty and justice? Between the brother she knows and the man he has become?

-- A timely story of the tensions splintering families and communities all over this country, S.M. Hulse''s Eden Mine is also a steady-eyed gaze into the ideals of the West and the legacies of violence, a moving account of faith in the face of evil, and a heartrending reckoning of the terrible choices we make for the ones we love.'),
    ('When We Were Vikings', 'https://images-na.ssl-images-amazon.com/images/I/51bYTI5AfdL._SX329_BO1,204,203,200_.jpg', /*6, */'Sometimes life isn’t as simple as heroes and villains.

For Zelda, a twenty-one-year-old Viking enthusiast who lives with her older brother, Gert, life is best lived with some basic rules:

1. A smile means “thank you for doing something small that I liked.”
2. Fist bumps and dabs = respect.
3. Strange people are not appreciated in her home.
4. Tomatoes must go in the middle of the sandwich and not get the bread wet.
5. Sometimes the most important things don’t fit on lists.

-- But when Zelda finds out that Gert has resorted to some questionable—and dangerous—methods to make enough money to keep them afloat, Zelda decides to launch her own quest. Her mission: to be legendary. It isn’t long before Zelda finds herself in a battle that tests the reach of her heroism, her love for her brother, and the depth of her Viking strength.

-- When We Were Vikings is an uplifting debut about an unlikely heroine whose journey will leave you wanting to embark on a quest of your own, because after all...

-- We are all legends of our own making.'),
    ('The Mercies', 'https://images-na.ssl-images-amazon.com/images/I/51orM32c0ML._SX320_BO1,204,203,200_.jpg', /*3, */'Finnmark, Norway, 1617. Twenty-year-old Maren Magnusdatter stands on the craggy coast, watching the sea break into a sudden and reckless storm. Forty fishermen, including her brother and father, are drowned and left broken on the rocks below. With the menfolk wiped out, the women of the tiny Arctic town of Vardø must fend for themselves.

Three years later, a stranger arrives on their shore. Absalom Cornet comes from Scotland, where he burned witches in the northern isles. He brings with him his young Norwegian wife, Ursa, who is both heady with her husband''s authority and terrified by it. In Vardø, and in Maren, Ursa sees something she has never seen before: independent women. But Absalom sees only a place untouched by God, and flooded with a mighty evil. As Maren and Ursa are drawn to one another in ways that surprise them both, the island begins to close in on them, with Absalom''s iron rule threatening Vardø''s very existence.

Inspired by the real events of the Vardø storm and the 1621 witch trials, The Mercies is a story of love, evil, and obsession, set at the edge of civilization.'),
    ('Things in Jars: A Novel ', 'https://images-na.ssl-images-amazon.com/images/I/61mlrLANctL._SX329_BO1,204,203,200_.jpg', /*6, */'Bridie Devine—female detective extraordinaire—is confronted with the most baffling puzzle yet: the kidnapping of Christabel Berwick, secret daughter of Sir Edmund Athelstan Berwick, and a peculiar child whose reputed supernatural powers have captured the unwanted attention of collectors trading curiosities in this age of discovery.

Winding her way through the labyrinthine, sooty streets of Victorian London, Bridie won’t rest until she finds the young girl, even if it means unearthing a past that she’d rather keep buried. Luckily, her search is aided by an enchanting cast of characters, including a seven-foot tall housemaid; a melancholic, tattoo-covered ghost; and an avuncular apothecary. But secrets abound in this foggy underworld where spectacle is king and nothing is quite what it seems.

Blending darkness and light, history and folklore, Things in Jars is a spellbinding Gothic mystery that collapses the boundary between fact and fairy tale to stunning effect and explores what it means to be human in inhumane times.'),
    ('The Boston Massacre: A Family History', 'https://images-na.ssl-images-amazon.com/images/I/51XeOZ9or1L._SX329_BO1,204,203,200_.jpg', /*1, */'The story of the Boston Massacre—when on a late winter evening in 1770, British soldiers shot five local men to death—is familiar to generations. But from the very beginning, many accounts have obscured a fascinating truth: the Massacre arose from conflicts that were as personal as they were political. 
  
Professor Serena Zabin draws on original sources and lively stories to follow British troops as they are dispatched from Ireland to Boston in 1768 to subdue the increasingly rebellious colonists. And she reveals a forgotten world hidden in plain sight: the many regimental wives and children who accompanied these armies. We see these families jostling with Bostonians for living space, finding common cause in the search for a lost child, trading barbs and and sharing baptisms. Becoming, in other words, neighbors. When soldiers shot unarmed citizens in the street, it was these intensely human, now broken bonds that fueled what quickly became a bitterly fought American Revolution. 
 
Serena Zabin’s The Boston Massacre delivers an indelible new slant on iconic American Revolutionary history. '),
    ('In the Land of Men: A Memoir', 'https://images-na.ssl-images-amazon.com/images/I/515EmoD-x%2BL._SX329_BO1,204,203,200_.jpg', /*5,*/ 'A naive and idealistic twenty-two-year-old from the Midwest, Adrienne Miller got her lucky break when she was hired as an editorial assistant at GQ magazine in the mid-nineties. Even if its sensibilities were manifestly mid-century—the martinis, powerful male egos, and unquestioned authority of kings—GQ still seemed the red-hot center of the literary world. It was there that Miller began learning how to survive in a man’s world. Three years later, she forged her own path, becoming the first woman to take on the role of literary editor of Esquire, home to the male writers who had defined manhood itself— Hemingway, Mailer, and Carver. Up against this old world, she would soon discover that it wanted nothing to do with a “mere girl.” 

But this was also a unique moment in history that saw the rise of a new literary movement, as exemplified by McSweeney’s and the work of David Foster Wallace. A decade older than Miller, the mercurial Wallace would become the defining voice of a generation and the fiction writer she would work with most. He was her closest friend, confidant—and antagonist. Their intellectual and artistic exchange grew into a highly charged professional and personal relationship between the most prominent male writer of the era and a young woman still finding her voice. 

This memoir—a rich, dazzling story of power, ambition, and identity—ultimately asks the question “How does a young woman fit into this male culture and at what cost?” With great wit and deep intelligence, Miller presents an inspiring and moving portrayal of a young woman’s education in a land of men.');

  

INSERT INTO booknation_reviews (text, rating, book_id, user_id) VALUES 
  (
    'This thing is amazing.',
    4,
    1
    -- 2
  ),
  (
    'Put a bird on it!',
    4,
    1
    -- 4
  ),
  (
    'All the other reviewers are obviously insane, but this thing is actually pretty amazing.',
    5,
    1
    -- 4
  ),
  (
    'When life gives you lemons, trade them for this thing.',
    4,
    1
    -- 5
  ),
  (
    'This cured my psoriasis, but left me unable to tell the difference between the taste of squash and the concept of increasing.',
    3,
    2
    -- 6
  ),
  (
    'I think I swallowed a bug.',
    1,
    2
    -- 1
  ),
  (
    'I have not used it or even seen it, and I do not actually know what it is. I do not know why I am writing this review, how I got here, or what my name is. Three stars!',
    3,
    2,
    -- 3
  ),
  (
    'Ew.',
    1,
    4
    -- 3
  ),
  (
    'I heard about this one time at band camp.',
    3,
    4
    -- 2
  ),
  (
    'big time many goodness!!!',
    5,
    10
    -- 5
  );
  

COMMIT;