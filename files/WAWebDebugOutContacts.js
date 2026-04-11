__d(
  "WAWebDebugOutContacts",
  ["WAWebOutContactCollection", "WAWebOutContactModel"],
  function (t, n, r, o, a, i, l) {
    var e = [
        "Alice",
        "Bob",
        "Carlos",
        "Diana",
        "Elena",
        "Frank",
        "Grace",
        "Hector",
        "Irene",
        "James",
        "Karen",
        "Leo",
        "Maya",
        "Noah",
        "Olivia",
        "Pablo",
        "Quinn",
        "Rosa",
        "Sam",
        "Tara",
        "Uma",
        "Victor",
        "Wendy",
        "Xavier",
        "Yara",
        "Zane",
        "Amara",
        "Brian",
        "Clara",
        "Derek",
      ],
      s = [
        "Smith",
        "Garcia",
        "Chen",
        "Patel",
        "Kim",
        "Lopez",
        "M\xFCller",
        "Andersen",
        "Tanaka",
        "Silva",
        "Rossi",
        "Johansson",
        "Nguyen",
        "Okafor",
        "Dubois",
        "Schmidt",
        "Ali",
        "Santos",
        "Park",
        "Fischer",
        "Reis",
        "Costa",
        "Martin",
        "Lee",
        "Brown",
        "Taylor",
        "Wilson",
        "Davis",
        "Clark",
        "Adams",
      ];
    function u(t) {
      t === void 0 && (t = 30);
      for (var n = [], a = 0; a < t; a++) {
        var i = e[a % e.length],
          l = s[a % s.length],
          u = "1" + String(5550001e3 + a),
          c = new (r("WAWebOutContactModel"))({
            id: u + "@s.whatsapp.net",
            fullName: i + " " + l,
            firstName: i,
          });
        (o("WAWebOutContactCollection").OutContactCollection.add(c, {
          merge: !0,
        }),
          n.push(c));
      }
      return n;
    }
    u.doc =
      "Seed N out-contacts (non-WA contacts) into OutContactCollection. Usage: Debug.seedOutContacts(30)";
    var c = { seedOutContacts: u };
    l.default = c;
  },
  98,
);
