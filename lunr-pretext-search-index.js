var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": ""
},
{
  "id": "ch-introduction",
  "level": "1",
  "url": "ch-introduction.html",
  "type": "Chapter",
  "number": "1",
  "title": "Introduction",
  "body": " Introduction  In the final chapter of his famous book How to Lie with Statistics , Darrell Huff tells us that anything smacking of the medical profession or published by scientific laboratories and universities is worthy of our trust. After all, Huff filled an entire book with the misleading statistical trickery used in politics and the media, but few people complain about statistics done by trained professional scientists.  Statistical data analysis is fundamental to science. Open a random page in your favorite medical journal and you'll be deluged with statistics: t tests, p values, proportional hazards models, risk ratios, logistic regressions, least-squares fits, and confidence intervals. Statisticians have provided scientists with tools of enormous power to find order and meaning in the most complex of datasets, and scientists have embraced them with glee.  They have not, however, embraced statistics education , and many undergraduate programs in the sciences require no statistical training whatsoever.  What follows is a list of the more egregious statistical fallacies regularly committed in the name of science. It assumes no knowledge of statistical methods, since many scientists receive no formal statistical training. And be warned: once you learn the fallacies, you will see them everywhere.   "
},
{
  "id": "ch-data-analysis",
  "level": "1",
  "url": "ch-data-analysis.html",
  "type": "Chapter",
  "number": "2",
  "title": "An Introduction to Data Analysis",
  "body": " An Introduction to Data Analysis  Much of experimental science comes down to measuring changes. Does one medicine work better than another? Do cells with one version of a gene synthesize more of an enzyme than cells with another version? Does one kind of signal processing algorithm detect pulsars better than another? Is one catalyst more effective at speeding a chemical reaction than another?  Much of statistics, then, comes down to making judgments about these kinds of differences. We talk about statistically significant differences because statisticians have devised ways of telling if the difference between two measurements is really big enough to ascribe to anything but chance.  We will explore what these methods mean and how to use them correctly, along with the common pitfalls that await the unwary scientist.  "
},
{
  "id": "ch-power",
  "level": "1",
  "url": "ch-power.html",
  "type": "Chapter",
  "number": "3",
  "title": "Statistical Power and Underpowered Statistics",
  "body": " Statistical Power and Underpowered Statistics  Statistical power is the ability of a study to detect an effect when one actually exists. An underpowered study is one that is unlikely to detect an effect even when it is real.  Many studies in the scientific literature are dramatically underpowered. They do not have enough subjects to reliably detect effects of the size they are looking for, meaning that a negative result is nearly meaningless. Yet negative results are just as important as positive ones for building a complete picture of scientific knowledge.  This chapter explores what statistical power means, how to compute it, and what the consequences are of running underpowered studies.  "
},
{
  "id": "ch-pseudoreplication",
  "level": "1",
  "url": "ch-pseudoreplication.html",
  "type": "Chapter",
  "number": "4",
  "title": "Pseudoreplication: Choose Your Data Wisely",
  "body": " Pseudoreplication: Choose Your Data Wisely  Pseudoreplication occurs when measurements are not truly independent of each other but are treated as though they are. This inflates the apparent sample size and leads to overconfident conclusions.  A classic example: if you measure the same mouse ten times, you do not have ten independent data points. You have one mouse with ten measurements. Treating these as ten independent observations grossly exaggerates your statistical power and the certainty of your conclusions.  This chapter discusses how pseudoreplication arises, how to recognize it, and how to design studies that avoid it.  "
},
{
  "id": "ch-p-value",
  "level": "1",
  "url": "ch-p-value.html",
  "type": "Chapter",
  "number": "5",
  "title": "The <em class=\"emphasis\">p<\/em> Value and the Base Rate Fallacy",
  "body": " The p Value and the Base Rate Fallacy  The p value is one of the most widely used and widely misunderstood concepts in statistics. A p value is the probability of obtaining results at least as extreme as those observed, given that the null hypothesis is true.  It is not the probability that your results occurred by chance, and it is not the probability that the null hypothesis is true. These common misinterpretations lead to the base rate fallacy: ignoring the prior probability that a hypothesis is true when evaluating evidence.  This chapter explores what p values really mean, how they are commonly misinterpreted, and what consequences these misinterpretations have for scientific practice.  "
},
{
  "id": "ch-significant-differences",
  "level": "1",
  "url": "ch-significant-differences.html",
  "type": "Chapter",
  "number": "6",
  "title": "When Differences in Significance Aren’t Significant Differences",
  "body": " When Differences in Significance Aren't Significant Differences  A common error in scientific reasoning is to compare the statistical significance of two results and draw conclusions from the comparison. If result A is statistically significant and result B is not, researchers often conclude that A and B are different from each other.  This reasoning is flawed. The difference between significant and not significant is not itself statistically significant. Two results may both be compatible with the same underlying effect, or may represent genuinely different effects but you cannot tell simply by comparing their p values.  This chapter explores the correct way to compare results and effect sizes, and the dangers of treating significance as a binary category.  "
},
{
  "id": "ch-regression",
  "level": "1",
  "url": "ch-regression.html",
  "type": "Chapter",
  "number": "7",
  "title": "Stopping Rules and Regression to the Mean",
  "body": " Stopping Rules and Regression to the Mean  When should you stop collecting data? If you analyze your data as you collect it and stop when you achieve statistical significance, you will dramatically inflate your false positive rate. This is known as optional stopping, and it is a subtle but serious problem in scientific research.  Related to this is regression to the mean: extreme measurements tend to be followed by less extreme ones, simply because of random variation. A patient who scores very low on a test will likely score higher the next time not because of any treatment, but because their first score was unusually low.  This chapter discusses stopping rules, regression to the mean, and how to avoid being fooled by these phenomena.  "
},
{
  "id": "ch-freedom",
  "level": "1",
  "url": "ch-freedom.html",
  "type": "Chapter",
  "number": "8",
  "title": "Researcher Freedom: Good Vibrations?",
  "body": " Researcher Freedom: Good Vibrations?  Scientists make dozens of small decisions when designing and analyzing experiments: which participants to exclude, which outcomes to measure, when to stop collecting data, which covariates to include. Each of these decisions is a degree of freedom that can be exploited, consciously or not, to obtain a desired result.  This researcher degrees of freedom problem means that many published findings reflect the choices made during analysis as much as they reflect the underlying reality. Even well-meaning scientists can fool themselves into finding false results if they are not careful.  This chapter examines how researcher freedom operates, how it inflates false positive rates, and what practices can constrain it.  "
},
{
  "id": "ch-mistakes",
  "level": "1",
  "url": "ch-mistakes.html",
  "type": "Chapter",
  "number": "9",
  "title": "Everybody Makes Mistakes",
  "body": " Everybody Makes Mistakes  Statistical errors are not limited to a few careless researchers they are pervasive across disciplines. Studies of published research find errors in a substantial fraction of papers, from simple arithmetic mistakes to fundamental conceptual misunderstandings.  Errors arise from many sources: inadequate training, software bugs, copy-and-paste mistakes, and the pressure to produce significant results. Even careful researchers make mistakes, and the peer review process is not reliable enough to catch them all.  This chapter catalogues common statistical errors found in the literature and discusses what can be done to reduce their frequency.  "
},
{
  "id": "ch-hiding",
  "level": "1",
  "url": "ch-hiding.html",
  "type": "Chapter",
  "number": "10",
  "title": "Hiding the Data",
  "body": " Hiding the Data  Science is built on transparency. Reproducibility requires that other scientists be able to examine the data and methods behind a published result. Yet data sharing is far from universal, and there are many ways both intentional and accidental that data and methods can be hidden from scrutiny.  Publication bias means that positive results are far more likely to be published than negative ones. Selective reporting means that only some of the outcomes measured in a study appear in the final paper. Together, these practices create a distorted picture of scientific evidence.  This chapter discusses publication bias, selective reporting, data sharing, and what the scientific community can do to improve transparency.  "
},
{
  "id": "ch-results",
  "level": "1",
  "url": "ch-results.html",
  "type": "Chapter",
  "number": "11",
  "title": "What Have We Wrought?",
  "body": " What Have We Wrought?  The statistical errors described in this book are not rare edge cases. They are widespread, and their consequences are serious. Entire fields of science may be built on shaky statistical foundations, with many published findings that cannot be replicated.  Several high-profile replication failures have called into question the reliability of published scientific research. When researchers attempt to replicate well-known findings, they often fail sometimes dramatically so.  This chapter surveys what we know about the state of scientific reproducibility and discusses the consequences for science and society.  "
},
{
  "id": "ch-what-next",
  "level": "1",
  "url": "ch-what-next.html",
  "type": "Chapter",
  "number": "12",
  "title": "What Can Be Done?",
  "body": " What Can Be Done?  The situation is not hopeless. Statisticians, methodologists, and enlightened scientists have proposed many reforms to improve the quality of scientific research. Some have already been implemented; others are gaining traction.  Pre-registration, larger sample sizes, open data, replication studies, better statistical education, and revised publication standards can all contribute to a more reliable scientific literature. None of these changes is easy or free, but the alternative continuing to build science on a shaky foundation is worse.  This chapter surveys the reforms that have been proposed and evaluates their prospects for improving scientific practice.  "
},
{
  "id": "ch-conclusion",
  "level": "1",
  "url": "ch-conclusion.html",
  "type": "Chapter",
  "number": "13",
  "title": "Conclusion",
  "body": " Conclusion  Beware false confidence. You may soon develop a smug sense of satisfaction that your work doesn't screw up like everyone else's. But this guide has not given you a thorough introduction to the mathematics of data analysis. There are many ways to foul up statistics beyond these simple conceptual errors.  Errors will occur often, because somehow, few undergraduate science degrees or medical schools require courses in statistics and experimental design. This is seen as acceptable despite the paramount role of data and statistical analysis in the pursuit of modern science. Scientists need formal statistical training and advice.  Change will not be easy. Rigorous statistical standards don't come free: if scientists start routinely performing statistical power computations, for example, they'll soon discover they need vastly larger sample sizes to reach solid conclusions. But isn't it worse to build our progress on a foundation of unsound results?  To any science students: invest in a statistics course or two while you have the chance. To researchers: invest in training, a good book, and statistical advice.  "
},
{
  "id": "ch-bibliography",
  "level": "1",
  "url": "ch-bibliography.html",
  "type": "References",
  "number": "",
  "title": "Bibliography",
  "body": " Bibliography  J. P. A. Ioannidis. Why Most Published Research Findings Are False . PLoS Medicine , 2(8):e124, 2005.  K. S. Button, J. P. A. Ioannidis, C. Mokrysz, B. A. Nosek, J. Flint, E. S. J. Robinson, M. R. Munafò. Power failure: why small sample size undermines the reliability of neuroscience . Nature Reviews Neuroscience , 14:365 376, 2013.  A. Gelman, E. Loken. The statistical crisis in science . American Scientist , 102(6):460, 2014.  J. P. Simmons, L. D. Nelson, U. Simonsohn. False-positive psychology: Undisclosed flexibility in data collection and analysis allows presenting anything as significant . Psychological Science , 22(11):1359 1366, 2011.  Open Science Collaboration. Estimating the reproducibility of psychological science . Science , 349(6251):aac4716, 2015.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
