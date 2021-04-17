export type Key =
	| "numGames"
	| "numPeriods"
	| "quarterLength"
	| "minRosterSize"
	| "maxRosterSize"
	| "numGamesPlayoffSeries"
	| "numPlayoffByes"
	| "draftType"
	| "numSeasonsFutureDraftPicks"
	| "draftAges"
	| "salaryCap"
	| "minPayroll"
	| "luxuryPayroll"
	| "luxuryTax"
	| "minContract"
	| "maxContract"
	| "minContractLength"
	| "maxContractLength"
	| "hardCap"
	| "budget"
	| "aiTradesFactor"
	| "playersRefuseToNegotiate"
	| "injuryRate"
	| "tragicDeathRate"
	| "brotherRate"
	| "sonRate"
	| "forceRetireAge"
	| "homeCourtAdvantage"
	| "rookieContractLengths"
	| "rookiesCanRefuse"
	| "allStarGame"
	| "foulRateFactor"
	| "foulsNeededToFoulOut"
	| "foulsUntilBonus"
	| "threePointers"
	| "pace"
	| "threePointTendencyFactor"
	| "threePointAccuracyFactor"
	| "twoPointAccuracyFactor"
	| "blockFactor"
	| "stealFactor"
	| "turnoverFactor"
	| "orbFactor"
	| "challengeNoDraftPicks"
	| "challengeNoFreeAgents"
	| "challengeNoRatings"
	| "challengeNoTrades"
	| "challengeLoseBestPlayer"
	| "challengeFiredLuxuryTax"
	| "challengeFiredMissPlayoffs"
	| "challengeThanosMode"
	| "realPlayerDeterminism"
	| "repeatSeason"
	| "ties"
	| "otl"
	| "spectator"
	| "elam"
	| "elamASG"
	| "elamMinutes"
	| "elamPoints"
	| "playerMoodTraits"
	| "numPlayersOnCourt"
	| "numDraftRounds"
	| "tradeDeadline"
	| "autoDeleteOldBoxScores"
	| "difficulty"
	| "stopOnInjuryGames"
	| "stopOnInjury"
	| "aiJerseyRetirement"
	| "tiebreakers"
	| "pointsFormula"
	| "equalizeRegions"
	| "noStartingInjuries"
	| "realDraftRatings"
	| "randomization"
	| "realStats"
	| "hideDisabledTeams";

export type Category =
	| "New League"
	| "General"
	| "Season"
	| "Standings"
	| "Team"
	| "Draft"
	| "Finances"
	| "Contracts"
	| "Events"
	| "Game Simulation"
	| "Elam Ending"
	| "Challenge Modes"
	| "Game Modes"
	| "Player Development"
	| "UI";

export type FieldType =
	| "bool"
	| "float"
	| "float1000"
	| "floatOrNull"
	| "int"
	| "jsonString"
	| "string"
	| "rangePercent"
	| "floatValuesOrCustom";

export type Decoration = "currency" | "percent";

export type Values = {
	key: string;
	value: string;
}[];
