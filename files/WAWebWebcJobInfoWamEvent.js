__d(
  "WAWebWebcJobInfoWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumWebcJobResultTypeCode",
    "WAWebWamEnumWebcScenarioType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WebcJobInfo: [
            3054,
            {
              jobName: [1, e.TYPES.STRING],
              jobPriority: [2, e.TYPES.STRING],
              jobResultType: [
                5,
                o("WAWebWamEnumWebcJobResultTypeCode")
                  .WEBC_JOB_RESULT_TYPE_CODE,
              ],
              pendingJobsCount: [4, e.TYPES.INTEGER],
              scenario: [
                3,
                o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE,
              ],
              webcJobAddedT: [6, e.TYPES.INTEGER],
              webcJobCompletedT: [8, e.TYPES.INTEGER],
              webcJobStartedT: [7, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { WebcJobInfo: [] },
      );
    l.WebcJobInfoWamEvent = s;
  },
  98,
);
