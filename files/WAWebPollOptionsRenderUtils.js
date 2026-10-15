__d(
  "WAWebPollOptionsRenderUtils",
  [
    "fbt",
    "WALogger",
    "WAWebClock",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebPollCreationUtils",
    "WAWebPollsSendVoteMsgAction",
    "WAXplatTrim",
    "countWhere",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = 2,
      c = 0;
    function d() {
      var e = c.toString();
      return (c++, e);
    }
    function m(e, t) {
      var n = t.focusedKey,
        r = t.maxOptionsCount,
        o = [].concat(e),
        a;
      for (var i of o)
        if (!(i.name !== "" || i.image != null)) {
          if (i.key === n) {
            a = i.key;
            break;
          }
          a = a != null ? a : i.key;
        }
      for (var l = o.length - 1; o.length > u && l >= 0; ) {
        var s = o[l];
        (s.key !== a && s.name === "" && s.image == null && o.splice(l, 1),
          l--);
      }
      for (
        var c = Math.max(a == null ? 1 : 0, u - o.length);
        c > 0 && o.length < r;
      )
        (o.push({ name: "", key: d() }), c--);
      return o;
    }
    function p(e) {
      return o("WAXplatTrim").trim(e.name) === "" && !e.image;
    }
    function _(e) {
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
    function f(e) {
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
          key: t < r.length ? r[t].key : d(),
          image: e.media,
        };
      });
      return (r.length > n.length && a.push.apply(a, r.slice(n.length)), a);
    }
    function g(t) {
      var n,
        r = t.msgKey,
        a = t.optionLocalId,
        i = t.selectableOptionsCount,
        l = t.votedForOptions,
        s =
          (n = o("WAWebMsgCollection").MsgCollection.get(r)) == null
            ? void 0
            : n.safe();
      if (s == null || s.type !== o("WAWebMsgType").MSG_TYPE.POLL_CREATION) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[polls] vote skipped, poll left the collection",
            ])),
        );
        return;
      }
      var u = new Set(l),
        c = u.has(a);
      (c ? u.delete(a) : (i === 1 && u.clear(), u.add(a)),
        o("WAWebPollsSendVoteMsgAction").sendVote(s, u));
    }
    function h(e) {
      var t = [];
      for (var n of e) {
        var r = n[0],
          o = n[1];
        o.isVotedForByMe && t.push(r.localId);
      }
      return new Set(t);
    }
    function y(e) {
      var t = e.correctOptionKey,
        n = e.isPhotoPoll,
        a = e.options,
        i = e.pollEndTime,
        l = e.pollEndTimeEnabled,
        c = e.pollType,
        d = e.question,
        m = a.filter(function (e) {
          return o("WAXplatTrim").trim(e.name) !== "";
        }),
        p = o("WAXplatTrim").trim(d);
      if (p.length === 0)
        return m.length < u
          ? s._(
              /*BTDS*/ '_j{"*":"Add a question and at least {number} options.","_1":"Add a question and at least 1 option."}',
              [s._plural(u, "number")],
            )
          : s._(/*BTDS*/ "Add a question.");
      if (n) {
        var _ = r("countWhere")(a, function (e) {
          return o("WAXplatTrim").trim(e.name) === "" && !e.image;
        });
        if (
          r("countWhere")(a, function (e) {
            return !e.image || o("WAXplatTrim").trim(e.name) === "";
          }) > _
        )
          return c === o("WAWebPollCreationUtils").PollType.QUIZ
            ? s._(
                /*BTDS*/ "For quizzes with photos, add a photo and text to each option.",
              )
            : s._(
                /*BTDS*/ "For polls with photos, add a photo and text to each option.",
              );
      }
      return m.length < u
        ? s._(
            /*BTDS*/ '_j{"*":"Add at least {number} options.","_1":"Add at least 1 option."}',
            [s._plural(u, "number")],
          )
        : c === o("WAWebPollCreationUtils").PollType.QUIZ && t == null
          ? s._(/*BTDS*/ "Select the right answer.")
          : c === o("WAWebPollCreationUtils").PollType.QUIZ &&
              a.some(function (e) {
                return e.key === t && o("WAXplatTrim").trim(e.name) === "";
              })
            ? s._(/*BTDS*/ "Select the right answer.")
            : l === !0 && i == null
              ? s._(/*BTDS*/ "Add an end time.")
              : l === !0 &&
                  i != null &&
                  i <= o("WAWebClock").Clock.getServerTimeMs()
                ? s._(/*BTDS*/ "Choose a future end time.")
                : null;
    }
    function C(e, t) {
      return e == null ? null : t.localId === e;
    }
    ((l.formatOptions = m),
      (l.isEmptyAfterTrimming = p),
      (l.validateOptions = _),
      (l.getNewOptions = f),
      (l.toggleOption = g),
      (l.getVotedForOptions = h),
      (l.validatePoll = y),
      (l.getIsCorrectOption = C));
  },
  226,
);
