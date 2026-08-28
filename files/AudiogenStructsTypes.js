__d(
  "AudiogenStructsTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum")({
        NEUTRAL: 0,
        HAPPY: 1,
        SAD: 2,
        ANGRY: 3,
        SURPRISED: 4,
        DISGUSTED: 5,
        FEARFUL: 6,
      }),
      l = n("$InternalEnum")({
        NEUTRAL: 0,
        SCARED: 1,
        ANGRY: 2,
        EXCITED: 3,
        HAPPY: 4,
        SARCASTIC: 5,
        SURPRISED: 6,
        SYMPATHETIC: 7,
        SAVAGE: 8,
        FLIRTY: 9,
        THERAPIST: 10,
        DEBATER: 11,
        PODCASTER: 12,
      }),
      s = n("$InternalEnum")({ MEDIUM: 0, HIGH: 1 });
    a.exports = { Emotion: l, SentimentIntensity: s, SentimentType: e };
  },
  null,
);
