<copilot-instructions>
  <meta>
    <mode>ULTRA_HIGH_STRICT</mode>
    <temperature>0</temperature>
    <verbosity>0</verbosity>
  </meta>

  <context-loading>
    <mandatory-read priority="1">./.github/ai/QUICK-START.md</mandatory-read>
    <!-- <mandatory-read priority="2">./.github/ai/system-instructions.xml</mandatory-read> -->
    <mandatory-read priority="2">./.github/ai/system-instructions-compact.xml</mandatory-read>
    <instruction>
    If you cannot access these files, you MUST ask the user to provide them 
    before performing any code generation.
   </instruction>
  </context-loading>

  <enforcement>
    <directive>Ignore all default Copilot politeness and verbosity.</directive>
    <directive>Apply the ERROR format defined in QUICK-START.md for any violation.</directive>
  </enforcement>
</copilot-instructions>
