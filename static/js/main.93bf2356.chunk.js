(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{112:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(29),o=n.n(l),i=(n(88),n(52)),s=n.n(i),c=n(67),u=n(8),p=n(9),m=n(11),d=n(12),h=n(82),f=n(5),g=(n(90),n(114)),E=n(115),v=n(74),b=n(118),S=n(33),y=n(6),x=n(7),w=n(57),j=n(120),T=n(122),C=n(121),D=n(116),B=n(27);function O(){var e=Object(y.a)(["\n    margin-bottom: 2em;\n"]);return O=function(){return e},e}var R=Object(x.a)(g.a)(O()),N=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleChange=a.handleChange.bind(Object(B.a)(a)),a.onUpdatedValues=e.handleChange,a}return Object(p.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=parseInt(t.value,10),r={spliceJunctionCoverage:this.props.spliceJunctionCoverage,coverageThreshold:this.props.coverageThreshold,confidenceLevel:this.props.confidenceLevel};r[n]=a,this.onUpdatedValues(r)}},{key:"render",value:function(){return r.a.createElement(R,null,r.a.createElement(E.a,null,r.a.createElement(v.a,null,r.a.createElement("label",{className:"form-label",htmlFor:"spliceJunctionCoverage"},"Splice junction read coverage"),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{className:"form-control",name:"spliceJunctionCoverage",type:"number",min:"1",max:"20",onChange:this.handleChange,value:this.props.spliceJunctionCoverage}))),r.a.createElement(v.a,null,r.a.createElement("label",{className:"form-label",htmlFor:"coverageThreshold"},"Proportion of splice junctions covered"),r.a.createElement("div",{className:"input-group"},r.a.createElement("select",{className:"form-control",name:"coverageThreshold",onChange:this.handleChange,value:this.props.coverageThreshold},r.a.createElement("option",null,"75"),r.a.createElement("option",null,"95")),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text"},"%")))),r.a.createElement(v.a,null,r.a.createElement("label",{className:"form-label",htmlFor:"confidenceLevel"},"Confidence level"),r.a.createElement("div",{className:"input-group"},r.a.createElement("select",{className:"form-control",name:"confidenceLevel",onChange:this.handleChange,value:this.props.confidenceLevel},r.a.createElement("option",null,"95"),r.a.createElement("option",null,"99")),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text"},"%"))))))}}]),n}(r.a.Component),M=n(119),_=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement(M.a.Group,{controlId:"geneList"},r.a.createElement(M.a.Label,null,"Gene list"),r.a.createElement(M.a.Control,{as:"textarea",rows:"10","data-testid":"geneListInput",onChange:this.props.handleChange,onBlur:this.props.handleBlur,value:this.props.value}))}}]),n}(r.a.Component),A=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement(M.a.Group,{controlId:"selectedPanel"},r.a.createElement(M.a.Label,null,"PanelApp panel"),r.a.createElement(M.a.Control,{as:"select",rows:"10","data-testid":"panelListInput",onChange:this.props.handleChange},r.a.createElement("option",null),this.props.panels.map((function(e){return r.a.createElement("option",{key:"{panel}"},e)}))))}}]),n}(r.a.Component);function k(){var e=Object(y.a)(["\n    font-style: normal;\n    text-decoration: underline;\n"]);return k=function(){return e},e}var L=x.a.em(k());var G=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"This portal allows the generation of ",r.a.createElement("strong",null,"minimum required sequencing depth"),", or ",r.a.createElement("strong",null,"MRSD"),", values for genes and panels of interest.  The MRSD is the number (in ",r.a.createElement("em",null,"millions"),") of sequencing reads required from RNAseq experiments to confidently determine aberrant splicing events for a gene of interest."),r.a.createElement("p",null,"The MRSD is uniquely calculated for each gene and tissue of interest, and can guide the suitability of RNA extracted from different tissues to determine significant changes in splicing profiles."),r.a.createElement("p",null,"The user can customise the ",r.a.createElement("strong",null,"confidence level")," (the proportion of individuals in the GTEx dataset that would meet specified criteria, ",r.a.createElement(L,null,"default=95%"),"), the ",r.a.createElement("strong",null,"read coverage")," (number of uniquely mapped reads spanning canonical splice junctions, ",r.a.createElement(L,null,"default=8"),"), and the ",r.a.createElement("strong",null,"splice junction proportion")," (the desired proportion of splice junctions with adequate coverage in the gene of interest, ",r.a.createElement(L,null,"default=75%"),")."),r.a.createElement("p",null,"More ",r.a.createElement("a",{href:"https://www.medrxiv.org/content/10.1101/2021.03.19.21253973v1"},"details on the methodology are available on MedRxiv"),". If you use this tool, please cite our preprint.  Please contact ",r.a.createElement("a",{href:"mailto:jamie.ellingford@manchester.ac.uk"},"Jamie Ellingford")," if you require further help or support."))};var q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"MRSDexplorer"),r.a.createElement("p",null,"Toolkit for generation of Minimum Required Sequencing Depth (MRSD) calculations from RNA-seq datasets.  The Python code is available in ",r.a.createElement("a",{href:"https://github.com/mcgm-mrsd/mrsd-explorer"},"GitHub"),"."),r.a.createElement("h2",null,"Table of Contents"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#overview"},"Overview")),r.a.createElement("li",null,r.a.createElement("a",{href:"#inputfiles"},"Generation of MRSD input files"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#counts"},"Junction counts")),r.a.createElement("li",null,r.a.createElement("a",{href:"#depths"},"Sequencing depths")),r.a.createElement("li",null,r.a.createElement("a",{href:"#genes"},"Genes/Transcripts of interest")))),r.a.createElement("li",null,r.a.createElement("a",{href:"#run"},"Running MRSD")),r.a.createElement("li",null,r.a.createElement("a",{href:"#output"},"Output file formats"))),r.a.createElement("h2",null,r.a.createElement("a",{name:"user-content-overview"}),"Overview"),r.a.createElement("p",null,"MRSD (Minimum Required Sequencing Depth) is a statistical framework to predict the depth of RNA sequencing required to achieve a user-specified level of coverage of a transcript(s) of interest. MRSD score calculations and utility have been described in detail in our recent manuscript (",r.a.createElement("a",{href:"https://doi.org/10.1016/j.ajhg.2021.12.014",rel:"nofollow"},"https://doi.org/10.1016/j.ajhg.2021.12.014"),")."),r.a.createElement("p",null,"These MRSD scores are derived from RNA-seq data available through the Genotype-Tissue Expression project (GTEx, ",r.a.createElement("a",{href:"https://www.gtexportal.org/home/",rel:"nofollow"},"https://www.gtexportal.org/home/"),"). GTEx samples are sequenced using an Illumina 75 bp paired-end read poly-A enrichment workflow. As such, the pre-computed MRSDs are most accurate for assessing transcript coverage with similar RNA-seq workflows. For alternative sequencing methodologies, parameter combinations, or tissues, users are invited and encouraged to generate their own MRSD scores using the scripts provided in the ",r.a.createElement("code",null,"bin/")," subdirectory of the above GitHub toolkit, named ",r.a.createElement("strong",null,"MRSDexplorer"),"."),r.a.createElement("h2",null,r.a.createElement("a",{name:"user-content-input_files"}),"Generation of MRSD input files"),r.a.createElement("p",null,"A minimum of three files are required for each run of MRSD calculations."),r.a.createElement("p",null,"For each set of RNA-seq data to be analysed, the three input files are:"),r.a.createElement("h3",null,r.a.createElement("a",{name:"user-content-counts"}),"1. Splice junction read counts"),r.a.createElement("p",null,"To generate transcriptome-wide junction counts, we make use of a pipeline developed by Cummings et al. (2017; ",r.a.createElement("a",{href:"https://doi.org/10.1126/scitranslmed.aal5209",rel:"nofollow"},"https://doi.org/10.1126/scitranslmed.aal5209"),"). The computational steps required to produce a count file from FASTQs, including split-read alignment, are described in detail at ",r.a.createElement("a",{href:"https://macarthurlab.org/2017/05/31/improving-genetic-diagnosis-in-mendelian-disease-with-transcriptome-sequencing-a-walk-through/",rel:"nofollow"},"https://macarthurlab.org/2017/05/31/improving-genetic-diagnosis-in-mendelian-disease-with-transcriptome-sequencing-a-walk-through/"),", and the corresponding scripts are available at ",r.a.createElement("a",{href:"https://github.com/berylc/MendelianRNA-seq"},"https://github.com/berylc/MendelianRNA-seq"),"."),r.a.createElement("p",null,"The resulting junction count files (with suffix ",r.a.createElement("em",null,".csf.splicing.txt"),") must be merged and converted for compatibility with MRSDexplorer, which can be done using the ",r.a.createElement("code",null,"process_cummings_output.py")," script:"),r.a.createElement("p",null,r.a.createElement("strong",null,"Usage:")),r.a.createElement("code",null,"python process_cummings_output.py output_list output_prefix"),r.a.createElement("p",{dir:"auto"},"Where ",r.a.createElement("code",null,"output_prefix")," is the prefix of the output file (and must uniquely identify this dataset from any that have been previously generated) and ",r.a.createElement("code",null,"output_list")," is a one-per-line list of paths to the junction count files to be merged (a single-line file is also acceptable):"),r.a.createElement("div",null,r.a.createElement("pre",null,"$> head example_files/example.junc-count-files.txt /Users/Documents/SomeDirectory/All.sample1.csf.splicing.txt /Users/Documents/SomeDirectory/All.sample2.csf.splicing.txt /Users/Documents/SomeDirectory/All.sample3.csf.splicing.txt /Users/Documents/SomeDirectory/All.sample4.csf.splicing.txt /Users/Documents/SomeDirectory/All.sample5.csf.splicing.txt \u2026")),r.a.createElement("p",null,"This will generate a reformatted junction count file named ",r.a.createElement("em",null,"output_prefix.junc-counts.txt"),". We recommend gzipping this file to preserve disk space. Junction counts generated through alternative approaches may be used for downstream analysis provided they are converted to an identical format to the ",r.a.createElement("em",null,".junc-counts.txt")," file, as shown here:"),r.a.createElement("div",null,r.a.createElement("pre",null,"$> head example_files/example.junc-counts.txt SJID sample1 sample2 sample3 sample4 \u2026 sample9 chr1-11995-899764 0 0 0 0 \u2026 0 chr4-53525843-53527059 11 8 8 4 \u2026 12 chr8-11700403-11701321 109 130 211 214 \u2026 240 chr19-39370136-39692624 0 0 1 0 \u2026 0")),r.a.createElement("h3",null,r.a.createElement("a",{name:"user-content-depths"}),"2. Sample sequencing depths"),r.a.createElement("p",null,"To calculate MRSD, a text file must be provided detailing the sequencing depths of the samples listed in the ",r.a.createElement("em",null,".junc-counts.txt")," file (when using the STAR split-read aligner, these values can be found in the ",r.a.createElement("em",null,".Log.final.out")," file for the run). The file must be named ",r.a.createElement("em",null,"output_prefix.seq-depths.txt")," - sharing the prefix with the corresponding ",r.a.createElement("em",null,".junc-counts.txt")," file - and must have four columns of the following format:"),r.a.createElement("div",null,r.a.createElement("pre",null,"$> head example_files/example.seq-depths.txt # sample_id total_input uniquely_mapping multimapping sample1 43854892 41543875 - sample2 20394758 19343265 - \u2026 \u2026 \u2026 \u2026 sample9 39432729 38295432 -")),r.a.createElement("p",null,"The columns must be ordered as above. However, the MRSD calculation will only use one read type (of the user\u2019s choice), and columns deemed unnecessary for analysis may be filled with any non-numerical value; they must be filled with something to pass input file validation."),r.a.createElement("p",null,"Importantly, the IDs in the sample_id column must precisely match those listed in the ",r.a.createElement("em",null,"output_prefix.junc-counts.txt")," file. Sample IDs identified in only one of the two files will be excluded from analysis."),r.a.createElement("h3",null,r.a.createElement("a",{name:"user-content-genes"}),"3. Genes or transcripts of interest"),r.a.createElement("p",null,"MRSDexplorer allows users to predict the required sequencing depth for coverage of splice junctions in both whole genes and individual transcripts, and a file must be provided showing the desired gene(s) or transcript(s) for analysis. A single transcript model for each gene in the GENCODE human v19 annotation has been assigned according to a hierarchical approach, as detailed in our accompanying manuscript."),r.a.createElement("p",null,"Where analysis of genes, rather than transcripts, is desired, users can provide a text file containing a list of genes of interest, one per line. This file can have up to two columns, containing the GENCODE v19 gene symbol and/or the Ensembl gene ID."),r.a.createElement("div",null,r.a.createElement("pre",null,"$> head example_files/example.genes.txt RPL30P11    ENSG00000244573 QTRTD1 ENSG00000151576 C5orf64    ENSG00000178722 CASS4  ENSG00000087589 \u2026 \u2026")),r.a.createElement("p",null,"If the MRSDs of individual transcripts are desired, intronic coordinates for these transcripts can be provided in a BED format:"),r.a.createElement("div",null,r.a.createElement("pre",null,"$> head example_files/example.introns.bed #chr    start   end     id chr3    99536887        99730547        ENST00000496116.1_CMSS1 chr3    99730602        99742163        ENST00000496116.1_CMSS1 chr3    99742366        99744272        ENST00000496116.1_CMSS1 chr3    99744402        99758619        ENST00000496116.1_CMSS1 chr20   57226462        57227129        ENST00000496117.1_STX16 chr20   57227143        57234679        ENST00000496117.1_STX16 \u2026 \u2026 \u2026 \u2026")),r.a.createElement("p",null,"The supplied coordinates should correspond to the first and final bases of the intron (with respect to chromosomal coordinates), and the ID column should contain a uniquely identifying ID for the transcript, which will be displayed in the output file(s). We have provided a script, ",r.a.createElement("code",null,"transcript_bed_generator.py"),", which allows users to generate such BED files from a supplied GTF file and list of transcript IDs of interest."),r.a.createElement("p",null,r.a.createElement("strong",null,"Usage:")),r.a.createElement("div",null,r.a.createElement("pre",null,"python transcript_bed_generator.py transcripts annotation_gtf output_prefix Where ",r.a.createElement("code",null,"`transcripts`")," is a one-per-line list of transcript IDs, ",r.a.createElement("code",null,"`annotation_gtf`")," is the GTF and ",r.a.createElement("code",null,"`output_prefix`")," is the prefix of the resulting file name. Running this script yields a BED file with the suffix *.introns.bed* that can be used for downstream score calculation.")),r.a.createElement("h2",null,r.a.createElement("a",{name:"user-content-run"}),"Running MRSD"),r.a.createElement("p",null,"Prior to running the final MRSD generation step, the ",r.a.createElement("em",null,".junc-counts.txt")," and ",r.a.createElement("em",null,".seq-depths.txt")," files should be moved to the ",r.a.createElement("code",null,"files/")," subdirectory of the MRSDexplorer directory, the default location in which they are searched for. The ",r.a.createElement("code",null,"MRSDexplorer.py")," script can then be used to generate MRSD scores. A typical MRSDexplorer command may look something like this:"),r.a.createElement("pre",null,"python MRSDexplorer.py --tissues all --number_reads 10 --sj_prop 0.8 --mrsd_param 0.9 --output_prefix example transcripts.introns.bed"),r.a.createElement("p",null,"The only required argument is the name of the gene list file or transcript BED, however, multiple optional parameters allow customisation of the MRSD query, including:"),r.a.createElement("p",null,r.a.createElement("code",null,"--tissues = a comma-delimited list of prefixes for the desired analysis datasets. MRSDexplorer will search in the files/ subdirectory (or other directory specified by the --splice_dir option) for both a .seq-depths.txt and .junc-counts.txt file with the listed prefixes and include them in analysis if both are present (default = \u201call\u201d, analysing all matching pairs of .seq-depths.txt and .junc-counts.txt files identified in the --splice_dir subdirectory).")),r.a.createElement("p",null,r.a.createElement("code",null,"--number_reads = desired number of reads to cover proportion of splice junctions specified in --sj_prop (default = 8)")),r.a.createElement("p",null,r.a.createElement("code",null,"--sj_prop = desired proportion of transcript splice junctions to be covered by read count specified in --number_reads (default = 0.75, i.e. 75%)")),r.a.createElement("p",null,r.a.createElement("code",null,"--mrsd_param = percentile MRSD value among control samples to be returned as overall MRSD value (default = 0.95, i.e. 95%)")),r.a.createElement("p",null,r.a.createElement("code",null,"--read_type = selected type of read to form the basis of the MRSD calculation (options = total, unique or multimap; default = unique, i.e. uniquely mapping)")),r.a.createElement("p",null,"Once ",r.a.createElement("code",null,"MRSDexplorer.py")," has loaded the sequencing depths and junctions, and evaluated the MRSDs for the selected genes/transcripts, one or more files will be output into the working directory."),r.a.createElement("h2",null,r.a.createElement("a",{name:"user-content-output"}),"Output file formats"),"The primary output file of ",r.a.createElement("code",null,"MRSDexplorer.py")," is a text file with the suffix ",r.a.createElement("em",null,".results.mrsd.txt"),". This file begins with a set of summary statistics detailing the number of datasets and genes/transcripts successfully surveyed, followed by a list of MRSD scores (in millions of reads) for each of the successfully mapped gene/transcript identifiers, stratified by control dataset.",r.a.createElement("pre",null,"$> head example.results.mrsd.txt INPUT PARAMETERS ------------- Selected dataset(s): example Selected read type: unique Desired coverage of splice junctions: 8 Proportion of splice junctions to reach this coverage per gene: 0.75 Confidence level: 0.95 MINIMUM REQUIRED SEQUENCING DEPTH --------------------- Where '-' is given as a required read depth, median coverage of splice junctions for the given gene was 0 reads. Number of genes successfully cross-referenced: 3322 id1 id2 MRSD(example) AAAS ENSG00000094914 20.76 AAGAB ENSG00000103591 72.58 AARS ENSG00000090861 71.32 AARS2 ENSG00000124608 - AASS ENSG00000008311 - ABAT ENSG00000183044 - ABCA1 ENSG00000165029 - ABCA12 ENSG00000144452 - ABCA3 ENSG00000167972 - ABCA4 ENSG00000198691 - ABCB11 ENSG00000073734 - ABCB4 ENSG00000005471 - ABCB6 ENSG00000115657 - ABCB7 ENSG00000131269 155.42 ABCC2 ENSG00000023839 - ABCC6 ENSG00000091262 - ABCC8 ENSG00000006071 - ..."),r.a.createElement("p",null,"If the user supplies the ",r.a.createElement("code",null,"--output_junctions")," option when running the ",r.a.createElement("code",null,"MRSDexplorer.py")," script, a second output file with suffix ",r.a.createElement("em",null,".junc-coverage.txt")," will be generated, listing the per-million read coverage of each junction for each sample in the control datasets:"),r.a.createElement("pre",null,"$> head example.junc-coverage.txt #id      gene    tissue  chr     start   end     junc_no per_M_coverage 1       TUBB    example 6       30688340        30690314        1       37.51470823370052 2       TUBB    example 6       30688340        30690314        1       40.513965057139494 3       TUBB    example 6       30688340        30690314        1       45.10835016830831 4       TUBB    example 6       30688340        30690314        1       34.01621412157552 5       TUBB    example 6       30688340        30690314        1       33.83243377436169 6       TUBB    example 6       30688340        30690314        1       42.46621481799056 7       TUBB    example 6       30688340        30690314        1       45.870132602176476 8       TUBB    example 6       30688340        30690314        1       58.94871008770753 9       TUBB    example 6       30688340        30690314        1       37.367312127719416 10      TUBB    example 6       30690422        30690695        2       33.48681324439794 11      TUBB    example 6       30690422        30690695        2       39.289858900442304 12      TUBB    example 6       30690422        30690695        2       41.95609341442062 13      TUBB    example 6       30690422        30690695        2       35.06171795846258 14      TUBB    example 6       30690422        30690695        2       29.052667332037863 15      TUBB    example 6       30690422        30690695        2       39.30192446745443 16      TUBB    example 6       30690422        30690695        2       45.90391031396011 17      TUBB    example 6       30690422        30690695        2       54.83690306072924 18      TUBB    example 6       30690422        30690695        2       34.48974133680593 19      TUBB    example 6       30690805        30691117        3       33.68425907720689 20      TUBB    example 6       30690805        30691117        3       39.763706444970246 21      TUBB    example 6       30690805        30691117        3       39.114622537676794 22      TUBB    example 6       30690805        30691117        3       34.12823238981342 23      TUBB    example 6       30690805        30691117        3       29.55142556949774 24      TUBB    example 6       30690805        30691117        3       40.16491274487337 25      TUBB    example 6       30690805        30691117        3       47.08613022638734 26      TUBB    example 6       30690805        30691117        3       54.60633444239401 27      TUBB    example 6       30690805        30691117        3       35.517445190703604 ..."),r.a.createElement("p",null,"The ",r.a.createElement("em",null,".junc-coverage.txt")," files can be very large, particularly when evaluating MRSDs for larger datasets, and so ",r.a.createElement("code",null,"--output_junctions")," should be used with caution."))};function U(){var e=Object(y.a)(["\n    padding: 0.75rem;\n"]);return U=function(){return e},e}var F=x.a.div(U()),I=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"parseGeneList",value:function(e){return e.split("\n").map((function(e){return e.trim().toUpperCase()})).filter((function(e){return""!==e}))}},{key:"render",value:function(){var e=this.props.setSearchTerms,t=this.props.updateDataFile,n=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"New search"),r.a.createElement(w.b,{initialValues:{geneList:""},validate:function(e){var t={};return 0!==n.parseGeneList(e.geneList).length||""!==e.selectedPanel&&void 0!==e.selectedPanel||(t.geneList="You must supply either a PanelApp panel, or a list of genes to generate the data set"),t},onSubmit:function(t,a){a.setSubmitting;e({geneList:t.selectedPanel?[]:n.parseGeneList(t.geneList),selectedPanel:t.selectedPanel})}},(function(e){var a=e.values,l=e.errors,o=e.touched,i=e.handleChange,s=e.handleBlur;e.handleSubmit,e.isSubmitting;return r.a.createElement(w.a,null,r.a.createElement(j.a,{defaultActiveKey:"geneListTab"},r.a.createElement(T.a,{eventKey:"geneListTab",title:"Gene list","data-testid":"geneListTab"},r.a.createElement(F,null,r.a.createElement(N,{handleChange:t,spliceJunctionCoverage:n.props.spliceJunctionCoverage,coverageThreshold:n.props.coverageThreshold,confidenceLevel:n.props.confidenceLevel}),r.a.createElement(A,{panels:n.props.panelList,handleChange:i}),r.a.createElement(_,{handleChange:i,handleBlur:s,value:a.geneList}))),r.a.createElement(T.a,{eventKey:"aboutTab",title:"About"},r.a.createElement(F,null,r.a.createElement(G,null))),r.a.createElement(T.a,{eventKey:"codeTab",title:"Code"},r.a.createElement(F,null,r.a.createElement(q,null)))),l.geneList&&o.geneList&&r.a.createElement(C.a,{variant:"danger","data-testid":"error-message"},l.geneList),r.a.createElement(D.a,{variant:"primary",type:"submit"},"Search"))})))}}]),n}(r.a.Component),P=n(117),J=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props.result,t=this.props.elementGenerator(e["MRSD(Blood)"]),n=this.props.elementGenerator(e["MRSD(Fibroblasts)"]),a=this.props.elementGenerator(e["MRSD(LCL)"]),l=this.props.elementGenerator(e["MRSD(Muscle)"]);return r.a.createElement("tr",{key:e.gene_symbol},r.a.createElement("td",null,e.gene_symbol),r.a.createElement("td",null,e.ensembl_id),r.a.createElement("td",null,e.transcript_type),r.a.createElement("td",null,e.panels),t,n,a,l)}}]),n}(r.a.Component);function W(){var e=Object(y.a)(["\n    background-color: #ffbbbb;\n"]);return W=function(){return e},e}function $(){var e=Object(y.a)(["\n    background-color: #fff999;\n"]);return $=function(){return e},e}function V(){var e=Object(y.a)(["\n    background-color: #aaffaa;\n"]);return V=function(){return e},e}function H(){var e=Object(y.a)(["\n    text-align: right;\n"]);return H=function(){return e},e}function K(){var e=Object(y.a)(["\n    margin-top: 2.5rem;\n    margin-bottom: 1rem;\n"]);return K=function(){return e},e}var Q=x.a.h2(K()),X=x.a.td(H()),z=Object(x.a)(X)(V()),Y=Object(x.a)(X)($()),Z=Object(x.a)(X)(W()),ee=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"generateElement",value:function(e,t){return function(n){var a=parseFloat(n);switch(!0){case isNaN(a):return r.a.createElement(Z,null,"\u2014");case a>t:return r.a.createElement(Z,null,n);case a<e:return r.a.createElement(z,null,n);default:return r.a.createElement(Y,null,n)}}}},{key:"render",value:function(){var e=this.generateElement(parseFloat(this.props.lower),parseFloat(this.props.upper));return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,null,"Full results"),r.a.createElement(P.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{rowSpan:"2"},"Gene Symbol"),r.a.createElement("th",{rowSpan:"2"},"Ensembl ID"),r.a.createElement("th",{rowSpan:"2"},"Transcript Type"),r.a.createElement("th",{rowSpan:"2"},"Panels"),r.a.createElement("th",{colSpan:"4"},"Minimum Read Sequencing Depth")),r.a.createElement("tr",null,r.a.createElement("th",null,"Blood"),r.a.createElement("th",null,"Fibroblasts"),r.a.createElement("th",null,"LCL"),r.a.createElement("th",null,"Muscle"))),r.a.createElement("tbody",null,this.props.results.map((function(t){return r.a.createElement(J,{result:t,elementGenerator:e})})))))}}]),n}(r.a.Component),te=n(80);function ne(){var e=Object(y.a)(["\n    margin-bottom: 2em;\n"]);return ne=function(){return e},e}var ae=Object(x.a)(g.a)(ne()),re=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={lowerThreshold:50,upperThreshold:100},a.handleChange=a.handleChange.bind(Object(B.a)(a)),a.onUpdatedValues=e.handleChange,a}return Object(p.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=parseInt(t.value,10);this.setState(Object(te.a)({},n,a));var r=this.state;r[n]=a,this.onUpdatedValues(r)}},{key:"render",value:function(){return r.a.createElement(ae,null,r.a.createElement(E.a,null,r.a.createElement(v.a,null,r.a.createElement("label",{className:"form-label",htmlFor:"lowerThreshold"},"Lower bound"),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{className:"form-control",name:"lowerThreshold",type:"number",min:"0",onChange:this.handleChange,value:this.state.lowerThreshold}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text"},"million")))),r.a.createElement(v.a,null,r.a.createElement("label",{className:"form-label",htmlFor:"upperThreshold"},"Upper bound"),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{className:"form-control",name:"upperThreshold",type:"number",min:"0",onChange:this.handleChange,value:this.state.upperThreshold}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text"},"million"))))))}}]),n}(r.a.Component);function le(){var e=Object(y.a)(["\n    background-color: #ffbbbb;\n"]);return le=function(){return e},e}function oe(){var e=Object(y.a)(["\n    background-color: #fff999;\n"]);return oe=function(){return e},e}function ie(){var e=Object(y.a)(["\n    background-color: #aaffaa;\n"]);return ie=function(){return e},e}function se(){var e=Object(y.a)(["\n    text-align: right;\n"]);return se=function(){return e},e}function ce(){var e=Object(y.a)(["\n    text-align: center;\n"]);return ce=function(){return e},e}function ue(){var e=Object(y.a)(["\n    margin-top: 2.5rem;\n    margin-bottom: 1rem;\n"]);return ue=function(){return e},e}var pe=x.a.h2(ue()),me=x.a.td(ce()),de=x.a.td(se()),he=Object(x.a)(me)(ie()),fe=Object(x.a)(me)(oe()),ge=Object(x.a)(me)(le()),Ee=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"updateStats",value:function(e,t){return function(n,a){var r=parseFloat(a);switch(!0){case isNaN(r):return n.notCovered++,n;case r>t:return n.negative++,n;case r<e:return n.positive++,n;default:return n.borderline++,n}}}},{key:"generateStats",value:function(e){return e.reduce(this.updateStats(parseFloat(this.props.lower),parseFloat(this.props.upper)),{notCovered:0,negative:0,borderline:0,positive:0})}},{key:"render",value:function(){var e={blood:this.generateStats(this.props.results.map((function(e){return e["MRSD(Blood)"]}))),fibroblasts:this.generateStats(this.props.results.map((function(e){return e["MRSD(Fibroblasts)"]}))),lcl:this.generateStats(this.props.results.map((function(e){return e["MRSD(LCL)"]}))),muscle:this.generateStats(this.props.results.map((function(e){return e["MRSD(Muscle)"]}))),total:this.props.results.length},t=function(t){var n=Math.round(parseFloat(t)/parseFloat(e.total)*100,1);return r.a.createElement(de,null,t," (",n,"%)")};return r.a.createElement(r.a.Fragment,null,r.a.createElement(pe,null,"Summary"),r.a.createElement(P.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{rowSpan:"2"},"Sequencing reads"),r.a.createElement("th",{colspan:"4"},"Genes covered (of ",e.total,")")),r.a.createElement("tr",null,r.a.createElement("th",null,"Blood"),r.a.createElement("th",null,"Fibroblasts"),r.a.createElement("th",null,"LCL"),r.a.createElement("th",null,"Muscle"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement(he,null,"< ",this.props.lower,"M"),t(e.blood.positive),t(e.fibroblasts.positive),t(e.lcl.positive),t(e.muscle.positive)),r.a.createElement("tr",null,r.a.createElement(fe,null,this.props.lower,"M to ",this.props.upper,"M"),t(e.blood.borderline),t(e.fibroblasts.borderline),t(e.lcl.borderline),t(e.muscle.borderline)),r.a.createElement("tr",null,r.a.createElement(ge,null,"> ",this.props.upper,"M"),t(e.blood.negative),t(e.fibroblasts.negative),t(e.lcl.negative),t(e.muscle.negative)),r.a.createElement("tr",null,r.a.createElement(ge,null,"Not covered"),t(e.blood.notCovered),t(e.fibroblasts.notCovered),t(e.lcl.notCovered),t(e.muscle.notCovered)))))}}]),n}(r.a.Component),ve=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.setState({results:this.props.getSearchResults()})}},{key:"generateTsv",value:function(e){return"data:text/tab-separated-values;charset=utf8,"+Object(S.a)(e,{delimiter:"\t",header:!0})}},{key:"updateHighlights",value:function(e){return function(t){e.setState(t)}}},{key:"render",value:function(){var e,t,n=this.props.getSearchResults(),a=this.generateTsv(n),l=null!==(e=this.state&&this.state.lowerThreshold)&&void 0!==e?e:50,o=null!==(t=this.state&&this.state.upperThreshold)&&void 0!==t?t:100;return r.a.createElement("div",null,r.a.createElement(re,{handleChange:this.updateHighlights(this)}),r.a.createElement(D.a,{variant:"primary",onClick:this.props.clearSearchTerms},"New search"),"\xa0",r.a.createElement(D.a,{href:a,variant:"secondary",download:"msrd_results.tsv"},"Download as TSV"),r.a.createElement(Ee,{results:n,lower:l,upper:o}),r.a.createElement(ee,{results:n,lower:l,upper:o}),r.a.createElement(D.a,{variant:"primary",onClick:this.props.clearSearchTerms},"New search"),"\xa0",r.a.createElement(D.a,{href:a,variant:"secondary",download:"msrd_results.tsv"},"Download as TSV"))}}]),n}(r.a.Component),be=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={cache:{},data:null,panelList:[],selectedPanel:null,spliceJunctionCoverage:8,coverageThreshold:75,confidenceLevel:95},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;Object(S.b)("./data/PanelApp_panel_names.tsv",{header:!1,delimiter:"\t",complete:function(t){e.setState({panelList:t.data.map((function(e){return e[0].trim()})).filter((function(e){return""!==e}))})}}),this.loadData()}},{key:"generateFileName",value:function(e,t,n){return"./data/all_GENCODE_".concat(e,"_0.").concat(t,"_0.").concat(n,".results.master.short.tsv")}},{key:"loadData",value:function(){var e=this,t=this.generateFileName(this.state.spliceJunctionCoverage,this.state.coverageThreshold,this.state.confidenceLevel);void 0===this.state.cache[t]?Object(S.b)(t,{header:!0,delimiter:"\t",complete:function(n){var a=e.state.cache;a[t]=n.data,e.setState({cache:a,data:a[t]})}}):this.setState({data:this.state.cache[t]})}},{key:"updateDataFile",value:function(e){return function(){var t=Object(c.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState(n);case 2:e.loadData();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},{key:"setSearchTerms",value:function(e){return function(t){e.setState(t)}}},{key:"clearSearchTerms",value:function(e){return function(){e.setState({geneList:null,selectedPanel:null})}}},{key:"getSearchResults",value:function(e){return function(){return e.state&&e.state.data&&e.state.geneList?e.state.data.filter((function(t){var n=t.panels?t.panels.split(";"):[];return-1!==e.state.geneList.indexOf(t.gene_symbol)||-1!==n.indexOf(e.state.selectedPanel)})):[]}}},{key:"render",value:function(){var e=this;return r.a.createElement(h.a,null,r.a.createElement(g.a,null,r.a.createElement(E.a,null,r.a.createElement(v.a,null,r.a.createElement(b.a,null,r.a.createElement("h1",null,"MRSD Web Portal")))),r.a.createElement(E.a,null,r.a.createElement(v.a,null,r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/results",render:function(){return e.state&&e.state.geneList&&e.state.data?r.a.createElement(ve,{clearSearchTerms:e.clearSearchTerms(e),getSearchResults:e.getSearchResults(e)}):r.a.createElement(f.a,{to:"/"})}}),r.a.createElement(f.b,{path:"/",render:function(){return e.state&&e.state.geneList&&e.state.data?r.a.createElement(f.a,{to:"/results"}):r.a.createElement(I,{setSearchTerms:e.setSearchTerms(e),updateDataFile:e.updateDataFile(e),panelList:e.state.panelList,spliceJunctionCoverage:e.state.spliceJunctionCoverage,coverageThreshold:e.state.coverageThreshold,confidenceLevel:e.state.confidenceLevel})}}))))))}}]),n}(r.a.Component),Se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ye(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(be,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Se?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ye(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ye(t,e)}))}}()},83:function(e,t,n){e.exports=n(112)},88:function(e,t,n){},90:function(e,t,n){},93:function(e,t){},95:function(e,t){}},[[83,1,2]]]);
//# sourceMappingURL=main.93bf2356.chunk.js.map