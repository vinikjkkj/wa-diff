__d(
  "WAWebPollOptionsRenderUtils",
  [
    "fbt",
    "WAWebPollCreationUtils",
    "WAWebPollsSendVoteMsgAction",
    "WAXplatTrim",
    "countWhere",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = 2,
      u = 0;
    function c() {
      var e = u.toString();
      return (u++, e);
    }
    function d(t, n) {
      var r = n.focusedKey,
        o = n.maxOptionsCount,
        a = [].concat(t),
        i;
      for (var l of a)
        if (!(l.name !== "" || l.image != null)) {
          if (l.key === r) {
            i = l.key;
            break;
          }
          i = i != null ? i : l.key;
        }
      for (var s = a.length - 1; a.length > e && s >= 0; ) {
        var u = a[s];
        (u.key !== i && u.name === "" && u.image == null && a.splice(s, 1),
          s--);
      }
      for (
        var d = Math.max(i == null ? 1 : 0, e - a.length);
        d > 0 && a.length < o;
      )
        (a.push({ name: "", key: c() }), d--);
      return a;
    }
    function m(e) {
      return o("WAXplatTrim").trim(e.name) === "" && !e.image;
    }
    function p(e) {
      var t = new Set(),
        n = new Map();
      for (var r of e) {
        var a = o("WAXplatTrim").trim(r.name);
        if (a !== "") {
          if (t.has(a)) {
            n.set(r.key, s._(/*BTDS*/ "This is already an option"));
            continue;
          }
          t.add(a);
        }
      }
      return n;
    }
    function _(e) {
      var t = e.activeOptionIndex,
        n = e.medias,
        r = e.originalOptions;
      if (t != null) {
        var o;
        return (
          (r[t].name = (o = n[0].media.caption) != null ? o : ""),
          (r[t].image = n[0].media),
          r
        );
      }
      var a = n.map(function (e, t) {
        var n;
        return {
          name: (n = e.media.caption) != null ? n : "",
          key: t < r.length ? r[t].key : c(),
          image: e.media,
        };
      });
      return (r.length > n.length && a.push.apply(a, r.slice(n.length)), a);
    }
    function f(e) {
      var t = e.msg,
        n = e.optionLocalId,
        r = e.selectableOptionsCount,
        a = e.votedForOptions,
        i = new Set(a),
        l = i.has(n);
      (l ? i.delete(n) : (r === 1 && i.clear(), i.add(n)),
        o("WAWebPollsSendVoteMsgAction").sendVote(t, i));
    }
    function g(e) {
      var t = [];
      for (var n of e) {
        var r = n[0],
          o = n[1];
        o.isVotedForByMe && t.push(r.localId);
      }
      return new Set(t);
    }
    function h(t) {
      var n = t.correctOptionKey,
        a = t.isPhotoPoll,
        i = t.options,
        l = t.pollType,
        u = t.question,
        c = i.filter(function (e) {
          return o("WAXplatTrim").trim(e.name) !== "";
        }),
        d = o("WAXplatTrim").trim(u);
      if (d.length === 0)
        return c.length < e
          ? s._(
              /*BTDS*/ '_j{"*":"Add a question and at least {number} options.","_1":"Add a question and at least 1 option."}',
              [s._plural(e, "number")],
            )
          : s._(/*BTDS*/ "Add a question.");
      if (a) {
        var m = r("countWhere")(i, function (e) {
          return o("WAXplatTrim").trim(e.name) === "" && !e.image;
        });
        if (
          r("countWhere")(i, function (e) {
            return !e.image || o("WAXplatTrim").trim(e.name) === "";
          }) > m
        )
          return l === o("WAWebPollCreationUtils").PollType.QUIZ
            ? s._(
                /*BTDS*/ "For quizzes with photos, add a photo and text to each option.",
              )
            : s._(
                /*BTDS*/ "For polls with photos, add a photo and text to each option.",
              );
      }
      return c.length < e
        ? s._(
            /*BTDS*/ '_j{"*":"Add at least {number} options.","_1":"Add at least 1 option."}',
            [s._plural(e, "number")],
          )
        : l === o("WAWebPollCreationUtils").PollType.QUIZ && n == null
          ? s._(/*BTDS*/ "Select the right answer.")
          : l === o("WAWebPollCreationUtils").PollType.QUIZ &&
              i.some(function (e) {
                return e.key === n && o("WAXplatTrim").trim(e.name) === "";
              })
            ? s._(/*BTDS*/ "Select the right answer.")
            : null;
    }
    ((l.formatOptions = d),
      (l.isEmptyAfterTrimming = m),
      (l.validateOptions = p),
      (l.getNewOptions = _),
      (l.toggleOption = f),
      (l.getVotedForOptions = g),
      (l.validatePoll = h));
  },
  226,
);
