# MyQceanProject 공지사항

# 업데이트 : 2022-11-19
  
#  포트 설정 : 15000
    1. 전체 페이지 주소!
    
    http://localhost:15000/
    
    @anonymous
    
    1.고민상담 페이지
    http://localhost:15000/anonymous/index
    
    @bulletin_board
    
    1.모임 목록 페이지
    http://localhost:15000/bulletinBoard/index
    
    @Community
    
    1.커뮤니티 페이지
    http://localhost:15000/community/index
    
    2.커뮤니티 댓글 페이지
    http://localhost:15000/community/comment
    
    3.커뮤니티 글쓰기 페이지
    http://localhost:15000/community/write
    
    4.커뮤니티 상세보기 페이지
    http://localhost:15000/community/detail
    
    @fix
    
    1.헤더 페이지
    http://localhost:15000/fix/header
    
    2.풋터 페이지
    http://localhost:15000/fix/footer
    
    @host
    
    1.소모임 작성 페이지
    http://localhost:15000/host/index
    
    @join
    
    1. 첫번째 회원가입 페이지
    http://localhost:15000/join/joinOne
    
    2. 두번째 회원가입 페이지
    http://localhost:15000/join/joinTwo
    
    3. 세번째 회원가입 페이지
    http://localhost:15000/join/joinThree
    
    @login
    
    1.로그인 페이지
    http://localhost:15000/login/index
    
    @main
    
    1.메인 페이지
    http://localhost:15000/main/index
    
    @manager
    
    1. 관리자 페이지 메인
    http://localhost:15000/manager/index
    
    2. 고민상담 게시글 관리
    http://localhost:15000/manager/counselingBoard
    
    3. 고민상담 댓글 관리
    http://localhost:15000/manager/counselingReply
    
    4. 자유게시판 게시글 관리
    http://localhost:15000/manager/freeBoard
    
    5. 자유게시판 댓글 관리
    http://localhost:15000/manager/freeReply
    
    6. 모임 개설 신청 관리
    http://localhost:15000/manager/groupOpenRequest
    
    7. 배너 관리 
    http://localhost:15000/manager/pageBanner
    
    8. 퀘스트 관리
    http://localhost:15000/manager/questList
    
    9. 문의사항 목록
    http://localhost:15000/manager/questions
    
    10. 회원 목록
    
    http://localhost:15000/manager/userList
    
    @myGroup
    
    1. 내가 참여한 모임 페이지
    http://localhost:15000/myGroup/joinGroup
    
    2. 내가 오픈한 모임 페이지
    http://localhost:15000/myGroup/openGroup
    
    @myList
    
    1. 내가 쓴 일기 페이지
    http://localhost:15000/myList/myDiary
    
    2. 내가 보낸 교환일기 페이지
    http://localhost:15000/myList/myExchangeDiary
    
    3. 카테고리 (합치는 부분!)
    http://localhost:15000/myList/myListCategory
    
    4. 책 이야기
    http://localhost:15000/myList/myListBook
    
    5.요리 이야기
    http://localhost:15000/myList/myListCook
    
    6.고민 상담
    http://localhost:15000/myList/myListCounseling
    
    7.운동 이야기
    http://localhost:15000/myList/myListExercise
    
    8.자유 게시판
    http://localhost:15000/myList/myListFree
    
    9.영화 이야기
    http://localhost:15000/myList/myListMovie
    
    10. 게시글 없는 페이지 표시 할 때!
    http://localhost:15000/myList/myListNocontents
    
    11. 내가 쓴 게시글 (전체)
    http://localhost:15000/myList/myListTotal
    
    @myPage
    
    1.마이 페이지
    http://localhost:15000/myPage/index
    
    2. 비밀번호 변경 페이지
    http://localhost:15000/myPage/passwordChange
    
    @myPoint
    
    1.마이 포인트 페이지
    http://localhost:15000/myPoint/index
    
    @myQuest
    
    1. 완료한 퀘스트 페이지
    http://localhost:15000/myQuest/completeQuest
    
    2.획득한 벳지 페이지
    http://localhost:15000/myQuest/myBadge
    
    3.오늘의 퀘스트 페이지
    http://localhost:15000/myQuest/todayQuest
    
    @mySpace
    
    1.나만의 공간 페이지
    http://localhost:15000/myspace/index
    
    @questionBoard
    
    1.자주 묻는 질문 페이지
    http://localhost:15000/questionBoard/index
    
    @search
    
    1. 통합 검색 페이지
    http://localhost:15000/search/totalSearch
    
    2.통합 검색이 없을때 페이지
    http://localhost:15000/search/nototalsearch


    2.새로운 페이지 생성할시 추가해야 하는 부분!
    
    (1)html 부분의 태그를 밑의 태그로 변경!
    <html lang="en" xmlns:th="http://www.thymeleaf.org">
    
    (2) header, footer css 2개 추가!
    <link rel="stylesheet" href="/css/fix/header.css">
    <link rel="stylesheet" href="/css/fix/footer.css">
    
    (3) body 태그 (시작점) 바로 아래 태그 추가!
    <header th:replace="/app/fix/header.html :: header"></header>
    
    (4) body 태그 (끝점) 바로 위에 태그추가!
    <footer th:replace="/app/fix/footer.html :: footer"></footer>
    
    (5) body태그 끝이나고 바로 아래에 script 태그 추가!
    <script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
    <script src="/js/fix/header.js"></script>
    
    
    
    1